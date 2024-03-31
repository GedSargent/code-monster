import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#b3c7ff', 600: '#364bff', 900: '#182775', 950: '#131e4f' };
const gray = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

const bgColor = "#2b2b2b";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        hero: "var(--sl-font)"
      },
			animation: {
        "spin-slow": "spin 30s linear infinite",
        "draw-circle": "border 1500ms ease-in-out 1 forwards",
      },
			keyframes: {
        border: {
          "0%": {
            boxShadow: `8px -8px 0 2px ${bgColor}, -8px -8px 0 2px ${bgColor}, -8px 8px 0 2px ${bgColor}, 8px 8px 0 2px ${bgColor}, 0 0 0 2px ${bgColor}`,
          },
          "25%": {
            boxShadow: `0 -21px 0 2px ${bgColor}, -8px -8px 0 2px ${bgColor}, -8px 8px 0 2px ${bgColor}, 8px 8px 0 2px ${bgColor}, 0 0 0 2px #fff`,
          },
          "50%": {
            boxShadow: `0 -21px 0 2px ${bgColor}, -21px 0px 0 2px ${bgColor}, -8px 8px 0 2px ${bgColor}, 8px 8px 0 2px ${bgColor}, 0 0 0 2px #fff`,
          },
          "75%": {
            boxShadow: `0 -21px 0 2px ${bgColor}, -21px 0px 0 2px ${bgColor}, 0px 21px 0 2px ${bgColor}, 8px 8px 0 2px ${bgColor}, 0 0 0 2px #fff`,
          },
          "100%": {
            boxShadow: `0 -21px 0 2px ${bgColor}, -21px 0px 0 2px ${bgColor}, 0px 21px 0 2px ${bgColor}, 16px 40px 0 2px ${bgColor}, 0 0 0 2px #fff`,
          },
        },
      },
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};
