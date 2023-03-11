import React from "react";
import Banner from "./components/banner";
import Features from "./components/features";
import Slider from "./components/slider";
import Preview from "./components/preview";
import Help from "./components/help";
import Modal from "./components/modal";
import Carosuels from "./components/carosuel";
import { useGlobalContext } from "./context";

const App = () => {
  const { handleScroll } = useGlobalContext();

  return (
    <section className="body">
      <Modal />
      <Banner />
      <Slider />
      <Features />
      <Preview />
      <Help />
      {/* <Carosuels /> */}
    </section>
  );
};

export default App;
