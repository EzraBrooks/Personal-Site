import Head from "next/head";
import styled from "styled-components";

const Cover = styled.div`
  height: 100vh;
  width: 100vw;
  font-family: "Fira Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`;

export default () => (
  <>
    <Head>
      <title>Ezra Brooks</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Cover>
      <h1>Ezra Brooks</h1>
      <h2>Software Developer &amp; DevOps Specialist</h2>
    </Cover>
  </>
);
