import React from "react";
import { GlobalCss } from "./styles.ts";

import Banner from "./components/Hero/index.tsx";
import Listagem from "./components/Listagem/index.tsx";
import Footer from "./components/Footer/index.tsx";

function App() {
  return (
    <>
      <GlobalCss />
      <Banner />
      <Listagem />
      <Footer />
    </>
  );
}

export default App;
