// Markdown files render the content in a React component on import
import MarkdownComponent from "~/md/data.md"
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import styles from "../../../node_modules/highlight.js/styles/atom-one-dark.css"
export function links() {
  return [{ rel: "stylesheet", href: styles }];
} 

export default function MdPlacer() { 
  return (
    <div>
     
     <MarkdownComponent />

    </div>
  );
}