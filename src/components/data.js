import React from "react";

import {
  FaRegCompass,
  FaRegCalendarAlt,
  FaCode,
  FaBook,
  FaParachuteBox,
  FaCube,
  FaArrowRight,
  FaUsers,
  FaCog,
  FaComments,
  FaRocket,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import firstImg from "../images/testimonial-1.jpg";
import secondImg from "../images/testimonial-2.jpg";
import thirdImg from "../images/testimonial-3.jpg";
import forthImg from "../images/testimonial-4.jpg";
import fifthImg from "../images/testimonial-5.jpg";
import sixthImg from "../images/testimonial-6.jpg";

import firstScreenshot from "../images/screenshot-1.png";
import secondScreenshot from "../images/screenshot-2.png";
import thirdScreenshot from "../images/screenshot-3.png";
import forthScreenshot from "../images/screenshot-4.png";
import fifthScreenshot from "../images/screenshot-5.png";
import sixthScreenshot from "../images/screenshot-6.png";
import seventhScreenshot from "../images/screenshot-7.png";
import eighthScreenshot from "../images/screenshot-8.png";
import ninethScreenshot from "../images/screenshot-9.png";
import tenthScreenshot from "../images/screenshot-10.png";

export const nameData = ["developer", "designers", "marketers"];

export const sliderData = [
  {
    id: 1,
    img: firstImg,
    text: "Morbi varius ante quis libero blandit auctor phasellus rhoncus varius nulla nec tristique. Vivamus quis placerat nisi. Duis suscipit feugiat neque eget bus",
    name: "jane doe",
    role: "developer",
  },
  {
    id: 2,
    img: secondImg,
    text: "Morbi varius ante quis libero blandit auctor phasellus rhoncus varius nulla nec tristique. Vivamus quis placerat nisi. Duis suscipit feugiat neque eget bus",
    name: "tim shaw",
    role: "marketer",
  },
  {
    id: 3,
    img: thirdImg,
    text: "Morbi varius ante quis libero blandit auctor phasellus rhoncus varius nulla nec tristique. Vivamus quis placerat nisi. Duis suscipit feugiat neque eget bus",
    name: "lindsay spice",
    role: "designer",
  },
  {
    id: 4,
    img: forthImg,
    text: "Morbi varius ante quis libero blandit auctor phasellus rhoncus varius nulla nec tristique. Vivamus quis placerat nisi. Duis suscipit feugiat neque eget bus",
    name: "singer jinger",
    role: "marketer",
  },
  {
    id: 5,
    img: fifthImg,
    text: "Morbi varius ante quis libero blandit auctor phasellus rhoncus varius nulla nec tristique. Vivamus quis placerat nisi. Duis suscipit feugiat neque eget bus",
    name: "ann black",
    role: "developer",
  },
  {
    id: 6,
    img: sixthImg,
    text: "Morbi varius ante quis libero blandit auctor phasellus rhoncus varius nulla nec tristique. Vivamus quis placerat nisi. Duis suscipit feugiat neque eget bus",
    name: "funnso julius",
    role: "developer",
  },
];

export const configuringData = [
  {
    img: <FaRegCompass />,
    name: "Goal Setting",
    text: "Nullam non tincidunt dui, vitae aliquet magna. Aenean ut porttit urna suspendisse luctus sena",
  },
  {
    img: <FaCode />,
    name: "Visual Editor",
    text: "Nullam non tincidunt dui, vitae aliquet magna. Aenean ut porttit urna suspendisse luctus sena",
  },
  {
    img: <FaParachuteBox />,
    name: "Refined Options",
    text: "Nullam non tincidunt dui, vitae aliquet magna. Aenean ut porttit urna suspendisse luctus sena",
  },
];

export const monitoringData = [
  {
    img: <FaRegCalendarAlt />,
    name: "Calendar Input",
    text: "Nullam non tincidunt dui, vitae aliquet magna. Aenean ut porttit urna suspendisse luctus sena",
  },
  {
    img: <FaBook />,
    name: "Easy Reading",
    text: "Nullam non tincidunt dui, vitae aliquet magna. Aenean ut porttit urna suspendisse luctus sena",
  },
  {
    img: <FaCube />,
    name: "Good Foundation",
    text: "Nullam non tincidunt dui, vitae aliquet magna. Aenean ut porttit urna suspendisse luctus sena",
  },
];

export const featuresImg = [firstScreenshot, thirdScreenshot, fifthScreenshot];

export const modalData = [
  "Tincidunt sem vel brita bet mala",
  "Sapien condimentum sacoz sil necr",
  "Fusce interdum nec ravon fro urna",
  "Integer pulvinar biolot bat tortor",
  "Id ultricies fringilla fangor raq trinit",
];

export const countUpData = [
  { icon: <FaUsers />, end: 231, name: "happy costomers" },
  { icon: <FaCode />, end: 385, name: "issues solved" },
  { icon: <FaCog />, end: 159, name: "good reviews" },
  { icon: <FaRocket />, end: 128, name: "case studies" },
  { icon: <FaComments />, end: 216, name: "press article" },
];

export const carosuelData = [
  firstScreenshot,
  secondScreenshot,
  thirdScreenshot,
  forthScreenshot,
  fifthScreenshot,
  sixthScreenshot,
  seventhScreenshot,
  eighthScreenshot,
  ninethScreenshot,
  tenthScreenshot,
];

export const footerIcons = [
  <FaFacebookF />,
  <FaTwitter />,
  <FaWhatsapp />,
  <FaInstagram />,
];
