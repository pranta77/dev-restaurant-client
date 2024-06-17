import React from "react";
import devimg from "../../../assets/home/chef-service.jpg";

const DevRestu = () => {
  return (
    <div>
      <div className="relative ">
        <img src={devimg} alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-center p-8 w-3/4 md:w-2/4">
          <h1 className="text-3xl text-white">Dev Restaurant</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevRestu;
