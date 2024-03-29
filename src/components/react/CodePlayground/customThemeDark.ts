import type { SandpackTheme } from "@codesandbox/sandpack-react/types";

const customThemeDark: SandpackTheme = {
  colors: {
    surface1: "#1f1f1f",
    surface2: "#2b2b2b",
    surface3: "#353535",
    clickable: "#999999",
    base: "#808080",
    disabled: "#4D4D4D",
    hover: "#C5C5C5",
    accent: "#cb90d4",
    error: "#FEF2F2",
    errorSurface: "#7F1D1D"
  },
  syntax: {
    plain: "#ffffff",
    comment: {
      color: "#6A9955",
      fontStyle: "italic",
    },
    keyword: "#cb90d4",
    tag: "#5294ca",
    punctuation: "#ffffff",
    definition: "#e9e99c",
    property: "#9cdafd",
    static: "#f8e71c",
    string: "#e6b568"
  },
  font: {
    body: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    mono: "\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
    size: "1rem",
    lineHeight: "1.6rem",
  }
}

export default customThemeDark;
