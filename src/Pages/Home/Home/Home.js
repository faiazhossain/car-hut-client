import React from "react";
import CustomersOpinion from "../CustomersOpinion/CustomersOpinion";
import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <CustomersOpinion></CustomersOpinion>
    </div>
  );
};

export default Home;
