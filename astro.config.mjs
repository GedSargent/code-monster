import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export const lightDarkModeDir = "guides/epic-news/light-and-dark-mode";

// https://astro.build/config
export default defineConfig({
  site: "https://gedsargent.github.io",
  base: "/code-monster",
  integrations: [
    starlight({
      title: "Code Monster",
      favicon: "/src/assets/favicon/favicon.ico",
      customCss: ["./src/tailwind.css", "./src/fonts/font-face.css"],
      components: {
        Hero: "/src/components/MonsterHero.astro",
      },
      expressiveCode: {
        plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
        defaultProps: {
          showLineNumbers: false,
        },
        styleOverrides: {
          borderRadius: '0.25rem',
          codeFontWeight: '500',
          codeFontSize: '1rem',
          uiFontSize: '1rem',
          uiFontWeight: '600',
          codeLineHeight: '1.7',
          textMarkers: {
            borderOpacity: '50%',
            markBackground: ['lch(100% 0 0 / 7%)', 'lch(0% 0 0 / 20%)'],
            markBorderColor: ['lch(100% 0 0 / 20%)', 'lch(0% 0 0 / 30%)'],
          }
        },
        themes: ["dark-plus", "light-plus"],
      },
      logo: {
        dark: "/src/assets/png/cm-logo-light.png",
        light: "/src/assets/png/cm-logo-dark.png",
        replacesTitle: true,
        alt: "Code Monster Logo",
      },
      social: {
        github: "https://github.com/GedSargent/code-monster",
      },
      sidebar: [
        {
          label: "React 101",
          items: [
            {
              label: "⚛️ Getting started",
              link: "guides/react-101/getting-started",
            },
            {
              label: "⚛️ JSX components",
              link: "guides/react-101/jsx-components",
            },
            {
              label: "⚛️ Props",
              link: "guides/react-101/props",
            },
          ],
        },
        {
          label: "Prisma",
          items: [
            {
              label: "🗄️ Database config",
              collapsed: true,
              items: [
                {
                  label: "🗄️ Getting started",
                  link: "guides/prisma/getting-started",
                },
                {
                  label: "🗄️ The schema and migrations",
                  link: "guides/prisma/prisma-schema",
                },
                {
                  label: "🗄️ Prisma Studio",
                  link: "guides/prisma/prisma-studio",
                },
                {
                  label: "🗄️ Database relationships",
                  link: "guides/prisma/database-relationships",
                },
                {
                  label: "🌱 Seed files",
                  link: "guides/prisma/seed-files",
                },
                {
                  label: "🗄️ Reading data - loader functions",
                  link: "guides/prisma/reading-data",
                }
              ]
            },
            {
              label: "🖥️ Displaying data",
              collapsed: true,
              items: [
                {
                  label: "🖥️ Props and interfaces",
                  link: "guides/prisma/displaying-data",
                },
                {
                  label: "🖥️ The map function",
                  link: "guides/prisma/using-map",
                }
              ]
            },
          ]
        },
        {
          label: "Epic News",
          items: [
            {
              label: "🛠 Project setup",
              link: "guides/epic-news/project-setup",
            },
            {
              label: "⚙️ The root.tsx file",
              link: "guides/epic-news/root-tsx",
            },
            {
              label: "🌞 Light and Dark Mode",
              collapsed: true,
              items: [
                {
                  label: "🌞 Setting up",
                  link: `${lightDarkModeDir}/01-setting-up`,
                },
                {
                  label: "🌞 From server to client - `useLoaderData`",
                  link: `${lightDarkModeDir}/03-from-server-to-client`,
                },
              ],
            },
            {
              label: "🖥️ User Interface - Basics",
              collapsed: true,
              items: [
                {
                  label: "🖥️ Add Navbar and Footer",
                  link: "guides/epic-news/ui/add-navbar-and-footer",
                },
                {
                  label: "🖥️ Logo Design",
                  link: "guides/epic-news/ui/logo-design",
                },
                {
                  label: "🖥️ Importing images in React",
                  link: "guides/epic-news/ui/import-image-to-navbar-and-footer",
                },
                {
                  label: "🖥️ Adding links",
                  link: "guides/epic-news/ui/adding-links",
                },
              ]
            },
            {
              label: "🧩 Custom Components",
              collapsed: true,
              items: [
                {
                  label: "🧩 `HeroCallToAction`",
                  link: "guides/epic-news/custom-components/hero-call-to-action",
                },
                {
                  label: "🧩 `ParallaxBackground` Hero",
                  link: "guides/epic-news/custom-components/hero-parallax-background",
                }
              ]
            },
            {
              label: "🔀 Routes, loaders and useLoaderData",
              collapsed: true,
              items: [
                {
                  label: "🔀 The `Outlet` component",
                  link: "guides/epic-news/routing/outlet",
                },
                {
                  label: "🔀 Nested routes",
                  link: "guides/epic-news/routing/nested-routes",
                },
                {
                  label: "🔀 Dynamic routes and loader functions",
                  link: "guides/epic-news/routing/dynamic-routes",
                },
                {
                  label: "🔀 Server/client communication with useLoaderData",
                  link: "guides/epic-news/routing/use-loader-data",
                },
              ]
            },
            {
              label: "🔒 Security",
              collapsed: true,
              items: [
                {
                  label: "🔒 Cross site request forgery",
                  link: "guides/epic-news/csrf",
                },
                {
                  label: "🔒 Spambots and honeypots",
                  link: "guides/epic-news/honey-pots",
                },
                {
                  label: "🔒 Account creation",
                  link: "guides/epic-news/account-creation",
                },
                {
                  label: "🔒 Single Sign-On",
                  link: "guides/epic-news/single-sign-on",
                },
              ]
            },
            {
              label: '🗄️ Prisma database',
              collapsed: true,
              items: [
                {
                  label: '🗄️ Schema updates',
                  link: 'guides/epic-news/prisma/schema-updates'
                },
                {
                  label: '🗂️ Modify project structure',
                  link: 'guides/epic-news/prisma/modify-project-structure'
                },
                {
                  label: '🌱 Modify seed file',
                  link: 'guides/epic-news/prisma/modify-seed-file'
                },
              ]
            },
            {
              label: "🖥️ Displaying Articles",
              collapsed: true,
              items: [
                {
                  label: '🖥️ Creating articles',
                  link: 'guides/epic-news/displaying-articles/creating-articles'
                },
                {
                  label: '🖥️ Loading Dummy Articles',
                  link: 'guides/epic-news/displaying-articles/loading-dummy-articles'
                },
                {
                  label: '🖥️ Style Dummy Articles',
                  link: 'guides/epic-news/displaying-articles/style-article-card'
                },
                {
                  label: '🖥️ Display an array of dummy articles',
                  link: 'guides/epic-news/displaying-articles/display-array-of-dummy-articles'
                },
                {
                  label: '🖥️ Load and display all real articles',
                  link: 'guides/epic-news/displaying-articles/load-and-display-all-real-articles'
                },
                {
                  label: '🖥️ Filter articles by category',
                  link: 'guides/epic-news/displaying-articles/filter-articles-by-category'
                },
              ]
            },
            {
              label: "📝 Single article page",
              collapsed: true,
              items: [
                {
                  label: '📝 Create a single article page',
                  link: 'guides/epic-news/single-article-page/create-single-article-page'
                },
                {
                  label: '📝 Link from news index to single article page',
                  link: 'guides/epic-news/single-article-page/link-to-single-article-page'
                },
                {
                  label: '📝 Fetch and display article data',
                  link: 'guides/epic-news/single-article-page/fetch-article-data'
                },
                {
                  label: '📝 Style the article page',
                  link: 'guides/epic-news/single-article-page/style-article-page'
                },
              ]
            },
            {
              label: "🛡️ Admin page",
              collapsed: true,
              items: [
                {
                  label: '🛡️ Create an admin review page',
                  link: 'guides/epic-news/admin-page/create-admin-page'
                },
                // {
                //   label: '🛡️ Check a user has a role',
                //   link: 'guides/epic-news/admin-page/check-a-user-has-a-role'
                // },
                // {
                //   label: '🛡️ Protecting routes',
                //   link: 'guides/epic-news/admin-page/protecting-routes'
                // }
              ]
            }
          ],
        },
        {
          label: "Reference",
          collapsed: true,
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: true,
    }),
    react(),
  ],
});
