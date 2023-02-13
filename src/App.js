import React from "react";
import Banner from "./components/banner";
import Features from "./components/features";
import Slider from "./components/slider";

import { useGlobalContext } from "./context";

const App = () => {
  const { handleScroll } = useGlobalContext();

  return (
    <section className="body">
      <Banner />
      <Slider />
      <Features />
    </section>
  );
};

export default App;
