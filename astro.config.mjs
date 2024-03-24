import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

const lightDarkModeDir = "guides/epic-news/light-and-dark-mode";

// https://astro.build/config
export default defineConfig({
  site: "https://gedsargent.github.io",
  base: "/code-monster",
  integrations: [
    starlight({
      title: "Code Monster",
      favicon: "/src/assets/favicon/favicon.ico",
      customCss: ["./src/tailwind.css"],
      components: {
        Hero: "/src/components/MonsterHero.astro",
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
            },
            {
              label: "🖥️ Displaying data - props and interfaces",
              link: "guides/prisma/displaying-data",
            },
            {
              label: "🖥️ Displaying data - the map function",
              link: "guides/prisma/using-map",
            },
          ]
        },
        {
          label: "Epic News",
          items: [
            {
              label: "The root.tsx file",
              link: "guides/epic-news/root-tsx",
            },
            {
              label: "🌞 Light and Dark Mode",
              items: [
                {
                  label: "🌞 Setting up",
                  link: `${lightDarkModeDir}/01-setting-up`,
                },
                {
                  label: "🌞 Add a loader function",
                  link: `${lightDarkModeDir}/02-adding-a-loader-function`,
                },
                {
                  label: "🌞 From server to client - `useLoaderData`",
                  link: `${lightDarkModeDir}/03-from-server-to-client`,
                },
                {
                  label: "🌞 `action` functions - light and dark mode",
                  link: `${lightDarkModeDir}/04-action-functions`,
                },
              ],
            },
            {
              label: "Navbar and Footer",
              link: "guides/epic-news/navbar-and-footer",
            },
            {
              label: "🔀 Routing in Remix",
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
              label: "Authentication and security",
              link: "guides/epic-news/authentication-and-security",
            },
            {
              label: "Account creation and SSO",
              link: "guides/epic-news/account-creation",
            },
            {
              label: "Toast notifications",
              link: "guides/epic-news/toast-notifications",
            },
          ],
        },
        {
          label: "Reference",
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
