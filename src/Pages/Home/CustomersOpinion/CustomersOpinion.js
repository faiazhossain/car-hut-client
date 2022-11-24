import React from "react";

const CustomersOpinion = () => {
  return (
    <div>
      <div className="my-12 p-12 bg-slate-400 text-slate-400-content shadow-2xl rounded-3xl">
        <h2 className="text-5xl">What Our Customer Says!</h2>
        <div className="carousel w-full">
          <div
            id="item1"
            className="carousel-item w-full flex flex-col my-10 justify-center items-center"
          >
            <h2 className="text-xl ">
              "AMAZING support! I was skeptical reading the authenticity of
              other glowing reviews when I was considering a car for my home.
              The support team has been amazing, always answering within a
              business day and going out of their way to help me. Thank you!! I
              found my dream car!"
            </h2>
            <p>~ Tithi</p>
          </div>
          <div
            id="item2"
            className="carousel-item w-full flex flex-col my-10 justify-center items-center"
          >
            <h2 className="text-xl ">
              Customer support is one of the best I have seen, and proactively
              propose solutions. The car i bought from their site was really
              cheap and in good condition. Thanks "CAR HUT"
            </h2>
            <p>~ Faiaz</p>
          </div>
          <div
            id="item3"
            className="carousel-item w-full flex flex-col my-10 justify-center items-center"
          >
            <h2 className="text-xl ">
              "Highly recommend! I have LOTS of anxiety about buying a car.
              After knowing about their site I feel comfortable and I believe
              they will connect us to the authentic seller."
            </h2>
            <p>~ Oishee</p>
          </div>
          <div
            id="item4"
            className="carousel-item w-full flex flex-col my-10 justify-center items-center"
          >
            <h2 className="text-xl ">
              " As i am not a expert and i don't know what to do with this
              limited cash, i just connected with them and they were really
              supportive and suggest me the best possible car within my range!!"
            </h2>
            <p>~ Nabila</p>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomersOpinion;
