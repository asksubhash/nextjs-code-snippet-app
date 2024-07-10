import { useGlobalContext } from "@/ContextApi";
import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language }) => {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  const codeString = `
  import React from 'react';

  function helloWorld(){
  return <h1>Hello World</h1>
  }

  export default helloWorld;
  `;
  return (
    <div className=" rounded-md overflow-hidden text-sm">
    <SyntaxHighlighter language={language} 
    style={darkMode[1].isSelected? oneDark :materialLight}>
      {codeString}
    </SyntaxHighlighter>
    </div>
    
  );
};

export default CodeBlock;
