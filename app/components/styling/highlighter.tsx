import hljs from "highlight.js";
import { useEffect, useRef } from "react";

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
// additional languages can be added using the pattern above

/*  These lines must be added wherever this is used.
import styles from "../../node_modules/highlight.js/styles/atom-one-dark.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }];
} 
*/
export function Highlighter({
  language = "javascript",
  children,
}: {
  language?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = hljs.highlight(String(children), {
        language,
        ignoreIllegals: true,
      }).value;
    }
  }, []);
  return (
    <div className="syntax-container">
      <pre data-syntax={language}>
        <code ref={ref} className={`hljs language-${language}`} />
      </pre>
    </div>
  );
}
