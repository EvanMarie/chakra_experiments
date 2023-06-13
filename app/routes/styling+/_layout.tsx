import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/global.css";
import { BigBackgroundBox } from "~/styles/DesignComponents";

import styles from "~/styles/codeMarkdown.css";
// import * as COMPONENT from "~/mardownExamples/COMPONENT/index"; <- for  markdown examples
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import { Outlet } from "@remix-run/react";
import { BreadCrumbs } from "~/components/app_components/breadCrumbs";

hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: styles },
];

export default function chakra_section() {
  return (
    <BigBackgroundBox>
      <Outlet />
    </BigBackgroundBox>
  );
}
