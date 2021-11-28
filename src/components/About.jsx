import React from "react";
import web from "../images/reactWeb.jpg";
import Common from "./Common";

function About() {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;
