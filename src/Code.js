import React from "react";

const Code = ({ code, language }) => {
  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default Code;
