export const SingleArticlePage = `import { invariant } from '@epic-web/invariant'
import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import SingleArticle from '~/components/organisms/SingleArticle'
import { getSingleArticle } from '~/models/article.server.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { articleId } = params
	invariant(typeof articleId === 'string', 'No article ID provided')

	const article = await getSingleArticle(articleId)

	return json({ article })
}

const ArticleNotFound = () => {
	return (
		<div className="container flex h-full flex-1 flex-col items-center justify-center">
			<h2 className="pb-8 text-center text-h2">No article found 🤔</h2>
			<p className="text-center text-xl">
				Please check the article ID in your browser and try again.
			</p>
		</div>
	)
}

export default function ArticlePage() {
	const { article } = useLoaderData<typeof loader>()

	return article ? <SingleArticle article={article} /> : <ArticleNotFound />
}`

export const SingleArticleComponent = `import { Link } from '@remix-run/react'
import { FiArrowLeft } from 'react-icons/fi'
import siteLogo from '~/assets/png/epic-news-logo@2x.png'
import CategoryWithIcon from '~/components/molecules/CategoryWithIcon'
import { getArticleImgSrc } from '~/utils/misc.ts'
import { toTitleCase } from '~/utils/stringHelpers.ts'

interface SingleArticleProps {
  article: {
    id: string
    title: string
    content: string
    owner: {
      name: string | null
    }
    category: {
      name: string
    } | null
    images: {
      id: string
    }[]
  }
}
export default function SingleArticle({ article }: SingleArticleProps) {
  const mainImage = article.images[0]
  const imageSrc = article.images.length
    ? getArticleImgSrc(mainImage.id)
    : siteLogo
  const categoryTitle = toTitleCase(article.category?.name || '')

  return (
    <div className="container py-16">
      <div className="lg:w-2/3">
        <Link
          to="/news"
          className="group flex items-center gap-2 pb-4 text-muted-foreground transition hover:text-foreground"
        >
          <FiArrowLeft className="transition group-hover:-translate-x-1" /> Back
          to News
        </Link>
        <h2 className="pb-8 text-h2">{article.title}</h2>

        <div
          className={\`relative h-[18rem] object-cover md:h-[23rem] lg:h-[28rem]\`}
        >
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-t-lg object-cover"
              src={imageSrc}
              alt={article.title}
            />
          </div>
        </div>
        <div className="flex justify-between gap-4 pt-4">
          <CategoryWithIcon categoryTitle={categoryTitle} />
          <span className="text-sm text-muted-foreground">
            By: {article.owner.name}
          </span>
        </div>
        <div className="whitespace-break-spaces pt-16 text-lg leading-loose">
          {article.content}
        </div>
      </div>
    </div>
  )
}`
