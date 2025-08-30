import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export const lightDarkModeDir = "guides/epic-news/light-and-dark-mode";

// https://astro.build/config
export default defineConfig({
  site: "https://gedsargent.github.io",
  base: "/code-monster",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "Code Monster",
      favicon: "/images/favicon.ico",
      customCss: [
        "./src/styles/global.css",
        "./src/fonts/font-face.css"
      ],
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
      social: [{
        icon: 'github',
        label: 'GitHub',
        href: "https://github.com/GedSargent/code-monster",
      }],
      sidebar: [
        {
          label: "Programming Principles",
          collapsed: false,
          items: [
            {
              label: "Harmony Music Academy",
              collapsed: false,
              items: [
                { label: "📄 1: Planning & setup",
                  collapsed: false,
                  items: [
                    {
                      label: "📄 Client brief",
                      link: "guides/programming/harmony-music/client-brief"
                    },
                    {
                      label: "⚙️ Algorithm design",
                      link: "guides/programming/harmony-music/algorithm-design"
                    },
                    {
                      label: "💻 Project file links",
                      link: "guides/programming/harmony-music/project-file-links"
                    },
                    {
                      label: "💻 Comment planning",
                      link: "guides/programming/harmony-music/comment-planning"
                    },
                    {
                      label: "🔄️ Committing to GitHub",
                      link: "guides/programming/harmony-music/committing-to-github",
                    },
                    {
                      label: "✏️ Assignment update",
                      link: "guides/programming/harmony-music/assignment-update",
                    },
                  ]
                },
                { label: "💻 2: HTML Forms",
                  collapsed: true,
                  items: [
                    {
                      label: "💻 HTML Inputs",
                      link: "guides/programming/harmony-music/html-inputs",
                    },
                    {
                      label: "💻 Capturing form data",
                      link: "guides/programming/harmony-music/capturing-form-data",
                    },
                    {
                      label: "🛠️ Debugging",
                      link: "guides/programming/harmony-music/debugging",
                    },
                    {
                      label: "💻 Form validation",
                      link: "guides/programming/harmony-music/form-validation",
                    },
                    {
                      label: "💻 Error handling",
                      link: "guides/programming/harmony-music/error-handling",
                    },
                    {
                      label: "✏️ Assignment update - mid",
                      link: "guides/programming/harmony-music/assignment-update-mid",
                    },
                  ]
                },
                { label: "📊 3: Calculations",
                  collapsed: true,
                  items: [
                    {
                      label: "💻 Code refactor",
                      link: "guides/programming/harmony-music/code-refactor",
                    },
                    {
                      label: "💻 Removing error messages",
                      link: "guides/programming/harmony-music/removing-error-messages",
                    },
                    {
                      label: "💻 Calculating costs",
                      link: "guides/programming/harmony-music/calculating-costs",
                    },
                    {
                      label: "💻 Displaying results",
                      link: "guides/programming/harmony-music/displaying-results",
                    },
                    {
                      label: "✏️ Assignment update - final",
                      link: "guides/programming/harmony-music/assignment-update-final",
                    },
                  ]
                },
              ]
            }
          ]
        },
        {
          label: "Epic News",
          collapsed: false,
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
                {
                  label: "🔀 News wireframe layout",
                  link: "guides/epic-news/routing/news-layout",
                },
              ]
            },
            {
              label: '🗄️ Prisma database',
              collapsed: true,
              items: [
                {
                  label: '🗄️ Getting started',
                  link: 'guides/epic-news/prisma/getting-started'
                },
                {
                  label: '🗄️ Schema updates',
                  link: 'guides/epic-news/prisma/schema-updates'
                },
                {
                  label: '🗄️ Modify project structure',
                  link: 'guides/epic-news/prisma/modify-project-structure'
                },
              ]
            },
            {
              label: "🔒 Security 101",
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
              ]
            },
            {
              label: "🖥️ Articles",
              collapsed: true,
              items: [
                {
                  label: '🖥️ Creating articles',
                  link: 'guides/epic-news/displaying-articles/creating-articles'
                },
                {
                  label: '🖥️ Load and display article data',
                  link: 'guides/epic-news/displaying-articles/load-and-display-article-data'
                },
                {
                  label: '🖥️ Article images (optional)',
                  link: 'guides/epic-news/displaying-articles/article-images'
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
                {
                  label: '🛡️ Protecting routes',
                  link: 'guides/epic-news/admin-page/protecting-routes'
                },
                {
                  label: '🛡️ Admin-only links',
                  link: 'guides/epic-news/admin-page/admin-only-links'
                },
                {
                  label: '🛡️ Filter published articles',
                  link: 'guides/epic-news/admin-page/filter-published-articles'
                }
              ]
            },
            { label: '🚀 Wrapping up',
              collapsed: true,
              items: [
              {
                label: '🚀 Functionality complete!',
                link: 'guides/epic-news/wrapping-up/functionality-complete'
              },
              {
                label: '🚀 Extra credit - Single sign-on',
                link: 'guides/epic-news/wrapping-up/single-sign-on'
              },
              {
                label: '🚀 Extra credit - Advanced grid layout',
                link: 'guides/epic-news/wrapping-up/advanced-grid-layout'
              }
            ]}
          ],
        },
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
          label: "📱 React Native",
          collapsed: true,
          items: [
            {
              label: "📱 Getting started with Expo Snacks",
              link: "guides/react-native/what-is-react-native",
            },
            {
              label: "📱 Coding a Figma Design",
              link: "guides/react-native/recreating-a-design",
            },
            {
              label: "📱 Editing tasks",
              link: "guides/react-native/editing-tasks",
            },
            {
              label: "📱 Creating new tasks",
              link: "guides/react-native/creating-new-tasks",
            },
            {
              label: "📱 Saving tasks to local storage",
              link: "guides/react-native/saving-tasks-to-localstorage",
            },
            {
              label: "📱 Writing tests",
              link: "guides/react-native/writing-tests",
            },
          ],
        },
        {
          label: "GameLog",
          collapsed: true,
          items: [
            {
              label: "🗄️ Database config",
              items: [
                {
                  label: "🗄️ Getting started",
                  link: "guides/gamelog/getting-started",
                },
                {
                  label: "🗄️ The schema and migrations",
                  link: "guides/gamelog/prisma-schema",
                },
                {
                  label: "🗄️ Prisma Studio",
                  link: "guides/gamelog/prisma-studio",
                },
                {
                  label: "🗄️ One-to-many relationships",
                  link: "guides/gamelog/relationships-one-to-many",
                },
                {
                  label: "🌱 Seed files",
                  link: "guides/gamelog/seed-files",
                },
                {
                  label: "🗄️ Reading data - loader functions",
                  link: "guides/gamelog/reading-data",
                },
              ]
            },
            {
              label: "🖥️ Displaying data",
              items: [
                {
                  label: "🖥️ Displaying data with `map`",
                  link: "guides/gamelog/displaying-data",
                },
                {
                  label: "🖥️ Passing data into components",
                  link: "guides/gamelog/passing-data-into-components",
                },
                {
                  label: "🖥️ Displaying data from two tables",
                  link: "guides/gamelog/displaying-data-from-two-tables",
                },
                {
                  label: "🖥️ Adding an image to the Game model",
                  link: "guides/gamelog/adding-an-image-to-the-game-model",
                },
                {
                  label: "🖥️ Load and display game images",
                  link: "guides/gamelog/load-and-display-game-images",
                },
                {
                  label: "🖥️ Creating new games",
                  link: "guides/gamelog/creating-new-games",
                },
                {
                  label: "🖥️ Deleting games",
                  link: "guides/gamelog/deleting-games",
                },
                {
                  label: "🖥️ Editing games",
                  link: "guides/gamelog/editing-games",
                },
                {
                  label: "🖥️ Next steps",
                  link: "guides/gamelog/next-steps",
                },
              ]
            },
          ]
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
    react(),
  ],
});
