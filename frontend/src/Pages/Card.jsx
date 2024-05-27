import React from "react";
import LuxuryWedding from "../assets/images/LuxuryWedding.png";
import { LuUser2 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

function Card() {
  return (
    <div className="flex-col w-80 h- mt-20 mb-20 bg-beige justify-center content-center mx-auto rounded-lg shadow-lg">
      <div className="relative  h-40 w-80 flex justify-center mt-6">
        <img className="w-" src={LuxuryWedding} alt="card-image" />
      </div>
      <div className="p-6">
        <h2 className="text-center mb-2 font-imbue text-3xl font-semibold">
          Luxury wedding
        </h2>
        <p className="font-imbue">
          MINIDESCRIPTIGIGJERGJMQEORGMQPLKPPOKPJP 
          AFJERFIJEROPFJEOFJJGMEGOJROGJPROONIHJIH
        </p>
      </div>

      <div className="p-6 pt-0 flex items-center">
        <LuUser2 />
        <h2 className="font-imbue ml-2">by wedding celebration</h2>
      </div>
      <div className="p-6 pt-0 flex items-center">
        <SlLocationPin />
        <h2 className="font-imbue ml-2">Rabat, Morocco</h2>
      </div>
    </div>
    
  );
}

export default Card;
