import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const lightDarkModeDir = "guides/epic-news/light-and-dark-mode";

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
              label: "🖥️ User Interface",
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
                  label: "🖥️ Toast notifications",
                  link: "guides/epic-news/ui/toast-notifications",
                },
              ]
            },
            {
              label: "🔀 Routing in Remix",
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
                  label: "🔀 Dynamic routes",
                  link: "guides/epic-news/routing/dynamic-routes",
                },
              ]
            },
            {
              label: "🔒 Security",
              collapsed: true,
              items: [
                {
                  label: "🔒 Authentication and security",
                  link: "guides/epic-news/authentication-and-security",
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
              label: '🗄️ Prisma database updates',
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
              label: "🖥️ Articles index page",
              collapsed: true,
              items: [
                {
                  label: '🖥️ Loading Dummy Articles',
                  link: 'guides/epic-news/articles-index-page/loading-dummy-articles'
                },
                {
                  label: '🖥️ Style Dummy Articles',
                  link: 'guides/epic-news/articles-index-page/style-article-card'
                },
                {
                  label: '🖥️ Display an array of dummy articles',
                  link: 'guides/epic-news/articles-index-page/display-array-of-dummy-articles'
                },
                {
                  label: '🖥️ Load and display all real articles',
                  link: 'guides/epic-news/articles-index-page/load-and-display-all-real-articles'
                },
                {
                  label: '🖥️ Filter articles by category',
                  link: 'guides/epic-news/articles-index-page/filter-articles-by-category'
                },
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
