import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import Callus from "../Callus/Callus";
import DevRestu from "../DevRestu/DevRestu";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dev Restaurant || Home</title>
      </Helmet>
      <Banner />
      <Category />
      <DevRestu />
      <PopularMenu />
      <Callus />
      <ChefRecommend />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
