# Markdown code demonstration

```javascript
export const loader = (args: DataFunctionArgs) => {

  marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }));

  const html = marked(`
  \`\`\`javascript
    ;
  \`\`\`
  `, { headerIds: false, mangle: false});

  return json({html});

}

export default function Highlighter() {
  const data = useLoaderData();
  const {html} = data;
  return (
    <div>
      <h1>Highlighter</h1>
      {/* display html if it exists using dangerously set innerhtml */}
      {html ? <div dangerouslySetInnerHTML={{__html: html}}></div> : null}
    </div>
  );
}
```