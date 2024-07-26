import React from "react";
import { GlobalCss } from "./styles.ts";

import Banner from "./components/Hero/index.tsx";

function App() {
  return (
    <>
      <GlobalCss />
      <Banner />
    </>
  );
}

export default App;
