// Markdown files render the content in a React component on import
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import styles from "./example.css";

import Feedback01 from "./feedback.md";

hljs.registerLanguage("javascript", javascript);

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function FeedbackExOne() {
  return <div> i dunno </div>;
}
