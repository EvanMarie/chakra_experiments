import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./example.css";

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {children}
    </SyntaxHighlighter>
  );
};

export default function FeedbackExMine() {
  return (
    <CodeBlock language="javascript">
      {`
        <Alert status="error">
          <AlertIcon />
          <AlertTitle color="black">This is a very important Warning!</AlertTitle>
          <AlertDescription color="black">Be on edge immediately!</AlertDescription>
        </Alert>
      `}
    </CodeBlock>
  );
}
