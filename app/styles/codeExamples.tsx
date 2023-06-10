/*
npm install marked@latest 
npm i --save-dev @types/marked 
npm i react-highlight 
*/

import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import { Box } from "@chakra-ui/react";
import { colors } from "./reusableChakraComponents";
import styles from "../../node_modules/highlight.js/styles/atom-one-dark.css";
import stylesUrl from "~/styles/global.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

marked.use(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

interface ExampleProps {
  children?: React.ReactNode;
}

export function Experiment({ children }: ExampleProps) {
  marked.use(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  return (
    <Box
      p={4}
      margin={4}
      w="100%"
      bg={colors.mainAccent2}
      justifyContent="center"
      alignItems="left"
      borderRadius="sm"
    >
      MARKED STUFF
    </Box>
  );
}
