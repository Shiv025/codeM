import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import Trending from "@/components/Trending";
function home() {
  return (
    <div>
      <div className="flex">
        <div className=" container relative p-0">
          <img className="w-[720px] opacity-[50%] " src={img1} />
          <h1 className="absolute top-[12rem] w-[450px] text-[#FCFCFC] text-[60px] z-10 leading-[101.15px] font-Jost font-semibold px-11">
            Embrace the spirit of India
          </h1>
          <h3
            className="absolute top-[25rem] w-[500px] p-[2rem] font-[22px] align-justify 
        text-[#FCFCFC] z-10"
          >
            An unparalleled legacy that spans millennia. Pure, authentic craft
            sourced from artisans across the Indian sub-continent. Our vast
            collection of over 80 different craft forms celebrates a heritage of
            some of the world’s oldest handicrafts.
          </h3>
        </div>

        <img
          className="w-[480px] h-[771px] mt-[6rem] mr-[3rem] ml-[3rem]"
          src={img2}
        />
      </div>

      <div className="">
        <div className="absolute ">
          <img
            className="opacity-[30%] w-[74vw] h-[617px] top-[1100px]"
            src={img3}
          />
          <div className=" absolute  w-[928px] h-[375px] top-[4rem] ml-[27px]  z-10">
            <p className=" w-[15vw] ml-[25rem] text-xl">Our Mission</p>

            <span className="flex justify-center grid col mt-[3.5rem] font-[Inter] text-5xl">
              <h1 className="">Every purchase</h1>
              <h2 className=" ml-[.5rem] mt-[1rem]">has a purpose</h2>
            </span>
            <p className="m-3 mt-[4rem] text-2xl">
              We have direct partnerships with over 320 Indian artisans and over
              2000 indirectly. As a social enterprise that seeks to offer a
              fair-trade platform, our primary purpose is to support handicraft
              workers. With each purchase you make, you can help make a
              difference.
            </p>
          </div>
        </div>
        <div className="ml-[58.9rem] h-[617px]  w-[25vw] opacity-[30%]">
          <img className="pt-[8rem]" src={img4} />
        </div>
      </div>
      
      <Trending/>
    </div>
  );
}

export default home;
