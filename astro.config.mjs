import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const lightDarkMode = "guides/light-and-dark-mode";

// https://astro.build/config
export default defineConfig({
  site: "https://gedsargent.github.io",
  base: "/code-monster",
  integrations: [
    starlight({
      title: "Code Monster",
      logo: {
        dark: "/src/assets/png/cm-logo-light.png",
        light: "/src/assets/png/cm-logo-dark.png",
        replacesTitle: true,
        alt: "Code Monster Logo",
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Epic News",
          items: [
            { label: "The root.tsx file", link: "guides/root-tsx" },
            {
              label: "Light and Dark Mode",
              items: [
                {
                  label: "Setting up",
                  link: `${lightDarkMode}/01-setting-up`,
                },
                {
                  label: "Add a loader function",
                  link: `${lightDarkMode}/02-adding-a-loader-function`,
                },
                {
                  label: "useLoaderData - from server to client",
                  link: `${lightDarkMode}/03-from-server-to-client-with-useLoaderData`,
                },
                {
                  label: "Toggle light and dark mode",
                  link: `${lightDarkMode}/04-toggle-light-and-dark-mode`,
                },
              ],
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
