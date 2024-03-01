import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
const lightDarkModeDir = "guides/light-and-dark-mode";

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
          label: "Epic News",
          items: [
            {
              label: "The root.tsx file",
              link: "guides/root-tsx",
            },
            {
              label: "Light and Dark Mode",
              items: [
                {
                  label: "Setting up",
                  link: `${lightDarkModeDir}/01-setting-up`,
                },
                {
                  label: "Add a loader function",
                  link: `${lightDarkModeDir}/02-adding-a-loader-function`,
                },
                {
                  label: "From server to client - `useLoaderData`",
                  link: `${lightDarkModeDir}/03-from-server-to-client`,
                },
                {
                  label: "`action` functions - light and dark mode",
                  link: `${lightDarkModeDir}/04-action-functions`,
                },
              ],
            },
            {
              label: "Navbar and Footer",
              link: "guides/navbar-and-footer",
            },
            {
              label: "🔀 Routing 1: The `Outlet` component",
              link: "guides/outlet",
            },
            {
              label: "Authentication and security",
              link: "guides/authentication-and-security",
            },
            {
              label: "Account creation and SSO",
              link: "guides/account-creation",
            },
            {
              label: "🔀 Routing 2: Route file structure",
              link: "guides/outlet",
            },
            {
              label: "Toast notifications",
              link: "guides/toast-notifications",
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
