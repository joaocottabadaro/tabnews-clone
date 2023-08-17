import React from "react";
import Lottie from "lottie-react";
import underConstruction from "../assets/underConstruction.json";

function Home() {
  return (
    <Lottie
      animationData={underConstruction}
      loop={true}
      style={{ width: "500px", margin: "20vh auto" }}
    />
  );
}

export default Home;
