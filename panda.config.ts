import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "react",
  globalCss: {
    body: {
      color: "primary",
      backgroundColor: "background",
      fontFamily: "open",
    },
    button: {
      color: "link",
    },
    a: {
      color: "link",
    },
  },
  theme: {
    tokens: {
      colors: {
        text: { value: "rgb(133, 153, 0)" },
        link: { value: "aqua" },
        primary: { value: "rgb(133, 153, 0)" },
        secondary: { value: "#002b36" },
        background: { value: "hsl(0, 0%, 20%)" },
        svg: { value: "hsl(0, 0%, 40%)" },
      },
      fonts: {
        system: { value: "system-ui, sans-serif" },
        open: { value: "'Open Sans', sans-serif" },
      },
    },
  },
  conditions: {
    extend: {},
  },
});
