import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import img5 from "../assets/images/banner/5.jpg";
import img6 from "../assets/images/banner/6.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="carousel w-full lg:h-[600px] rounded-md">

      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />

        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="pl-4 md:pl-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white md:w-[463px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:w-[522px] md:text-lg text-white mt-3 md:mt-7">
              There are many variations of passages of available, but the majority have suffered
              alteration in some form
            </p>

            <div className="flex gap-5 mt-3 md:mt-7">
              <button className="text-white btn btn-ghost bg-[#FF3811] md:text-lg font-semibold">
                Discover More
              </button>
              <button className="text-white btn btn-outline  md:text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex gap-5 transform -translate-y-1/2 right-2 md:right-12 bottom-0 md:bottom-4">
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />

        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="pl-4 md:pl-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white md:w-[463px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:w-[522px] md:text-lg text-white mt-3 md:mt-7">
              There are many variations of passages of available, but the majority have suffered
              alteration in some form
            </p>

            <div className="flex gap-5 mt-3 md:mt-7">
              <button className="text-white btn btn-ghost bg-[#FF3811] md:text-lg font-semibold">
                Discover More
              </button>
              <button className="text-white btn btn-outline  md:text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex gap-5 transform -translate-y-1/2 right-2 md:right-12 bottom-0 md:bottom-4">
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />

        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="pl-4 md:pl-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white md:w-[463px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:w-[522px] md:text-lg text-white mt-3 md:mt-7">
              There are many variations of passages of available, but the majority have suffered
              alteration in some form
            </p>

            <div className="flex gap-5 mt-3 md:mt-7">
              <button className="text-white btn btn-ghost bg-[#FF3811] md:text-lg font-semibold">
                Discover More
              </button>
              <button className="text-white btn btn-outline  md:text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex gap-5 transform -translate-y-1/2 right-2 md:right-12 bottom-0 md:bottom-4">
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />

        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="pl-4 md:pl-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white md:w-[463px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:w-[522px] md:text-lg text-white mt-3 md:mt-7">
              There are many variations of passages of available, but the majority have suffered
              alteration in some form
            </p>

            <div className="flex gap-5 mt-3 md:mt-7">
              <button className="text-white btn btn-ghost bg-[#FF3811] md:text-lg font-semibold">
                Discover More
              </button>
              <button className="text-white btn btn-outline  md:text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex gap-5 transform -translate-y-1/2 right-2 md:right-12 bottom-0 md:bottom-4">
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />

        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="pl-4 md:pl-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white md:w-[463px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:w-[522px] md:text-lg text-white mt-3 md:mt-7">
              There are many variations of passages of available, but the majority have suffered
              alteration in some form
            </p>

            <div className="flex gap-5 mt-3 md:mt-7">
              <button className="text-white btn btn-ghost bg-[#FF3811] md:text-lg font-semibold">
                Discover More
              </button>
              <button className="text-white btn btn-outline  md:text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex gap-5 transform -translate-y-1/2 right-2 md:right-12 bottom-0 md:bottom-4">
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />

        <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="pl-4 md:pl-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white md:w-[463px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:w-[522px] md:text-lg text-white mt-3 md:mt-7">
              There are many variations of passages of available, but the majority have suffered
              alteration in some form
            </p>

            <div className="flex gap-5 mt-3 md:mt-7">
              <button className="text-white btn btn-ghost bg-[#FF3811] md:text-lg font-semibold">
                Discover More
              </button>
              <button className="text-white btn btn-outline  md:text-lg font-semibold">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex gap-5 transform -translate-y-1/2 right-2 md:right-12 bottom-0 md:bottom-4">
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-[#FF3811] text-white bg-opacity-30 border-none"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
