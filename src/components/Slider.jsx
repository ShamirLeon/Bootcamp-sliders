import Img1 from "../assets/image-tanya.jpg";
import Img2 from "../assets/image-john.jpg";

import IconPrev from "../assets/Icons/IconPrev";
import IconNext from "../assets/Icons/IconNext";
import PatternBg from "../assets/Icons/PatternBg";
import PatternQuotes from "../assets/Icons/PatternQuotes";
import Data from "../data/Data.json";
import { useState } from "react";

const Images = [Img1, Img2];
const Sliders = Data.sliders;

const Slider = () => {
  let [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex(index - 1);
    if (index == 0) setIndex(Sliders.length - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
    console.log(index);
    if (index == Sliders.length - 1) setIndex(0);
  };

  return (
    <main className="w-[90%] mt-14 lg:mt-24 mx-auto lg:flex lg:flex-row-reverse lg:max-w-[1000px] ">
      <section className="relative">
        <img
          src={Images[index]}
          alt=""
          className="w-[55%] lg:w-[100%] relative m-auto z-10 rounded-lg shadow-x transition-all"
        />
        <PatternBg className="w-[90%] lg:w-[150%] absolute lg:top-[-120px] lg:right-[-70px] top-0 bottom-0 m-auto lg:m-0 z-0 "></PatternBg>

        <div className="max-w-fit mx-auto absolute z-20 bottom-[-20px] left-0 right-0 bg-transparent">
          <button
            className="px-4 py-2.5 rounded-l-[50%] bg-white shadow-xl "
            onClick={handlePrev}
          >
            <IconPrev></IconPrev>
          </button>
          <button
            className="px-4 py-2.5 rounded-r-[50%] bg-white shadow-xl "
            onClick={handleNext}
          >
            <IconNext></IconNext>
          </button>
        </div>
      </section>

      <div className="mt-28 font-inter text-center lg:text-left flex flex-col w-[80%] mx-auto relative">
        <PatternQuotes className="w-[20%] absolute lg:left-[-300px] left-0 right-0 top-[-50px] mx-auto"></PatternQuotes>
        <p className="text-xl lg:text-3xl font-light mb-3 lg:mb-4 transition-all">
          {Sliders[index].comment}
        </p>
        <div>
          <h1 className="font-bold text-lg lg:inline-block mr-2 transition-all">
            {Sliders[index].user}
          </h1>
          <h2 className="text-gray-600 lg:inline-block transition-all">
            {Sliders[index].role}
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Slider;
