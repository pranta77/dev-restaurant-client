import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 py-20">
      <SectionTitle
        heading="Featured Item"
        SubHeading="Check It Out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 md:px-36 max-sm:px-3 bg-opacity-60 bg-slate-400 ">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>June 01 , 2024</p>
          <h2 className="uppercase">where can i get some</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            tempore delectus praesentium adipisci similique architecto harum
            commodi, ipsa ex dolor porro dolorum ullam veniam quod illo
            distinctio. Autem corporis optio molestias, quas tempore non nihil
            ea nam inventore praesentium quisquam rerum rem voluptatibus
            asperiores commodi obcaecati eveniet eligendi, tenetur odit?
          </p>
          <button className="btn btn-outline border-0 border-slate-950 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
