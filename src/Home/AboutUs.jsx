import person from "../assets/images/about_us/person.jpg"
import parts from "../assets/images/about_us/parts.jpg"

const AboutUs = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 rounded-lg border-white border-8 shadow-2xl absolute top-1/2 right-20"
        />
        </div>
        <div className="lg:w-1/2 mt-10 md:mt-0">
          <p className="text-xl font-bold text-[#FF3811]">About Us</p>
          <h1 className="text-[#151515] mt-2 md:mt-5 text-3xl md:text-5xl font-bold md:w-[376px]">We are qualified & of experience in this field</h1>
          <p className="mt-2 md:mt-7 text-[#737373] capitalize">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="mt-2 md:mt-5 text-[#737373] capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn btn-ghost bg-[#FF3811] text-white text-lg font-semibold mt-3 md:mt-7">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
