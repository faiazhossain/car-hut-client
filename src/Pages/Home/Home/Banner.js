import React from "react";
import car from "../../../Assets/car.jpg";
import car1 from "../../../Assets/car1.jpg";
import car2 from "../../../Assets/car2.jpg";
import car3 from "../../../Assets/car3.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    //
    <div className="hero text-white background-image">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="carousel rounded-3xl w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={car} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={car1} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={car2} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={car3} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Car Hut</h1>
          <h3 className="text-2xl font-thin">Your car our responsiblity!</h3>
          <p className="py-6">
            We connect seller and buyer through our website. You can easily sell
            and buy your prefered car. You will find authentic seller here.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

    //
  );
};

export default Banner;
