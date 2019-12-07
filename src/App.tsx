import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Resume = styled(ReactMarkdown)`
  width: 60ch;
  margin: auto;
`

const App: React.FC<{}> = () => {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    (async () => {
      const response = await fetch(require('./resume.md'));
      setMarkdown(await response.text())
    })();
  })
  return <Resume source={markdown}></Resume>;
}

export default App;
