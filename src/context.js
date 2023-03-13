import React from "react";
import { useContext, useState, useEffect } from "react";
import { nameData } from "./components/data";
import { sliderData } from "./components/data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [drop, setDrop] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [num, setNum] = useState(0);
  const [number, setNumber] = useState(1);
  const [title, setTitle] = useState(nameData[num]);

  const [value, setValue] = useState(1);
  const [configuringOrder, setConfiguringOrder] = useState(1);
  const [trackingOrder, setTrackingOrder] = useState(2);
  const [monitoringOrder, setMonitoringOrder] = useState(3);
  const [imgIndex, setImgIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      // setNum(num + 1);
      if (num <= nameData.length - 1) {
        setNum(num + 1);
        setTitle(nameData[num]);
        // console.log(num);
      } else {
        setNum(0);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [num]);

  const showDrop = () => setDrop(true);

  const hideDrop = () => {
    setDrop(false);
  };

  const toggleDrop = () => {
    setDrop(!drop);
  };

  const handleNavToggle = () => {
    setShowOptions(!showOptions);
  };

  const handleScroll = (e) => {
    const offSet = e.target.offsetTop;
    // console.log(offSet);
  };

  const addNumber = () => {
    if (number > sliderData.length - 1) {
      setNumber(1);
    } else {
      setNumber(number + 1);
    }
  };

  const subNumber = () => {
    if (number < 1) {
      setNumber(6);
    } else {
      setNumber(number - 1);
    }
  };

  const configuringFun = () => {
    setValue(1);
    setConfiguringOrder(1);
    setTrackingOrder(2);
    setMonitoringOrder(3);
    setImgIndex(0);
  };

  const trackingFun = () => {
    setValue(2);
    setConfiguringOrder(3);
    setTrackingOrder(1);
    setMonitoringOrder(2);
    setImgIndex(1);
  };

  const monitoringFun = () => {
    setValue(3);
    setConfiguringOrder(2);
    setTrackingOrder(3);
    setMonitoringOrder(1);
    setImgIndex(2);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <AppContext.Provider
      value={{
        drop,
        showDrop,
        hideDrop,
        showOptions,
        handleNavToggle,
        handleScroll,
        toggleDrop,
        title,
        sliderData,
        number,
        setNumber,
        addNumber,
        subNumber,

        value,
        configuringOrder,
        trackingOrder,
        monitoringOrder,
        imgIndex,

        configuringFun,
        trackingFun,
        monitoringFun,

        closeModal,
        showModal,
        openModal,

        currentYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
