import React from "react";
import Banner from "./components/banner";
import Features from "./components/features";
import Slider from "./components/slider";
import Preview from "./components/preview";
import Help from "./components/help";

import { useGlobalContext } from "./context";

const App = () => {
  const { handleScroll } = useGlobalContext();

  return (
    <section className="body">
      <Banner />
      <Slider />
      <Features />
      <Preview />
      <Help />
    </section>
  );
};

export default App;
