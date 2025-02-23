import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        SubHeading={"From 11.00AM To 10.00PM"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="uppercase md:text-4xl text-center -mt-16 text-white">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="uppercase md:text-4xl  text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="uppercase md:text-4xl  text-center -mt-16 text-white">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="uppercase md:text-4xl  text-center -mt-16 text-white">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="uppercase md:text-4xl  text-center -mt-16 text-white">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
