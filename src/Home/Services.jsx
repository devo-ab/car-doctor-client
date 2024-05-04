import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[]);

  return (
    <div className="mt-10">
      <div className="text-center">
        <h3 className="text-[#FF3811] text-lg font-bold">Service</h3>
        <h1 className="md-2 md:mt-5 text-3xl md:text-5xl font-bold text-[#151515]">
          Our Service Area
        </h1>
        <p className="capitalize text-[#737373] md-3 md:mt-5 md:w-[717px] mx-auto">
          the majority have suffered alteration in some form, by injected humour, or randomised
          words which don't look even slightly believable.{" "}
        </p>
      </div>


      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => (<div key={service._id} className="border-2 border-[#E8E8E8] p-8 rounded-lg">
            <div>
              <img className=" rounded-md" src={service.img} alt="" />
            </div>
            <h3 className="text-[#444444] text-2xl font-bold mt-3 md:mt-5">{service.title}</h3>
            <div className="flex items-center justify-between mt-3 md:mt-5">
              <p className="text-[#FF3811] text-xl font-semibold">Price : ${service.price}</p>
              <p className="text-[#FF3811] ">
                <FaArrowRight />
              </p>
            </div>
          </div>))
        }
      </div>
    </div>
  );
};

export default Services;
