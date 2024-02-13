import { useEffect } from "react";
import { Box } from "../styled-system/jsx";
import { useSetFocus } from "./components/focus";

// @ts-expect-error Could not find
import Page from "./app/lens.mdx";
import { useKeyNav } from "./components/keynav";
import { Markdown } from "./components/markdown";

export default function Main() {
  useKeyNav();
  const setFocus = useSetFocus();
  useEffect(setFocus, [setFocus]);
  return (
    <Box m={10}>
      <Markdown>
        <Page />
      </Markdown>
    </Box>
  );
}
