import React from "react";
import Navbar from "../components/shared/Navbar";
import eventsPic from "../assets/images/aboutUs.png";
import LuxuryWedding from "../assets/images/LuxuryWedding.png";
import { LuUser2 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import Filter from "../Pages/Filter";

const cardsData = [
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 1...",
    author: "Author 1",
    location: "Location 1",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 2...",
    author: "Author 2",
    location: "Location 2",
    imageSrc: LuxuryWedding
  },
  
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  {
    title: "Luxury Wedding ",
    description: "Description for wedding 12...",
    author: "Author 12",
    location: "Location 12",
    imageSrc: LuxuryWedding
  },
  
];

const Card = ({ title, description, author, location, imageSrc }) => (
  <div className="w-72 p-6 ">
    <div className="bg-[#f5f5dc] rounded-lg shadow-lg w-full max-w-sm mx-auto"> 
      <div className="relative flex justify-center">
        <img className=" mt-5 h-48 " src={imageSrc} alt="card-image" />
      </div>
      <div className="p-6">
        <h2 className="text-center mb-2 font-imbue text-3xl font-semibold">
          {title}
        </h2>
        <p className="font-imbue">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0 flex">
        <LuUser2 />
        <h2 className="font-imbue ml-2">by {author}</h2>
      </div>
      <div className="p-6 pt-0 flex ">
        <SlLocationPin />
        <h2 className="font-imbue ml-2">{location}</h2>
      </div>
    </div>
  </div>
);

function WeddingEventPage() {
  return (
    <div className="min-h-screen flex flex-col"> 
      <Navbar />

      <div className="relative flex-1">
        <img
          className="absolute z-[-1] w-full h-full object-cover rounded-[90px]"
          src={eventsPic}
          alt="events"
        />
        <p className="flex items-center justify-center z-10 h-full text-white font-semibold text-[7rem] md:text-[14rem] font-imbue">
          Events
        </p>
      </div>

      <div className="flex items-center justify-center py-12">
        <h1 className="text-[#213f2e] text-7xl font-imbue">Weddings</h1>
      </div>

      <div className="flex justify-end  mb-20 pr-6">
      <Filter />
        <div className="flex-wrap grid grid-cols-3 justify-end">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              author={card.author}
              location={card.location}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default WeddingEventPage;
