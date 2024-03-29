import type { SandpackTheme } from "@codesandbox/sandpack-react/types";

const customThemeDark: SandpackTheme = {
  colors: {
    surface1: "#1F1F1F",
    surface2: "#2B2B2B",
    surface3: "#353535",
    clickable: "#999999",
    base: "#808080",
    disabled: "#4D4D4D",
    hover: "#C5C5C5",
    accent: "#CB90D4",
    error: "#FEF2F2",
    errorSurface: "#7F1D1D"
  },
  syntax: {
    plain: "#FFFFFF",
    comment: {
      color: "#6A9955",
      fontStyle: "italic",
    },
    keyword: "#CB90D4",
    tag: "#5294CA",
    punctuation: "#FFFFFF",
    definition: "#E9E99C",
    property: "#9CDAFD",
    static: "#F8E71C",
    string: "#E6B568"
  },
  font: {
    body: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    mono: "\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
    size: "1rem",
    lineHeight: "1.6rem",
  }
}

export default customThemeDark;
