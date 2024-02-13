/// <reference types="vitest" />
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { remarkCodeHike } from "@code-hike/mdx";
import rehypeMermaid from "rehype-mermaid";
import Unfonts from "unplugin-fonts/vite";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mdxOptions: any = {
  rehypePlugins: [rehypeMermaid],
  remarkPlugins: [
    [
      remarkCodeHike,
      {
        skipLanguages: ["mermaid"],
        theme: "solarized-dark",
        lineNumbers: false,
        showCopyButton: true,
      },
    ],
  ],
};
// vite.config.ts

// https://vitejs.dev/config/
export default defineConfig({
  /* plugins: [{ enforce: "pre", ...mdx(mdxOptions) }, react()], */
  base: "",
  plugins: [
    { enforce: "pre", ...mdx(mdxOptions) },
    Unfonts({
      fontsource: {
        families: ["Open Sans Variable"],
      },
    }),
    react(),
  ],
  test: {
    globals: true,
  },
});
