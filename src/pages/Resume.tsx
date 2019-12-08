import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const MarkdownContainer = styled(ReactMarkdown)`
  width: 60ch;
  margin: auto;
`;

const Resume: React.FC<{}> = () => {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    (async () => {
      const response = await fetch(require("../resume.md"));
      setMarkdown(await response.text());
    })();
  });
  return <MarkdownContainer source={markdown} />;
};

export default Resume;
