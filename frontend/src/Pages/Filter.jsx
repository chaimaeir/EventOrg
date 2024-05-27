import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import Slider from "@mui/material/Slider";

function Filter() {
  const [value, setValue] = useState(10);
  const [sliderValue, setSliderValue] = useState([20, 37]);

  const incrementValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrementValue = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const valuetext = (value) => `${value}`;
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const types = [
    "Graduation",
    "Anniversary",
    "Baby shower",
    "Engagement",
    "Wedding",
    "Birthday",
    "Product launching",
    "Conference",
    "Team building",
  ];

  return (
    <div className=" flex flex-col  items-center justify-center min-h-screen p-4">
      <div className="bg-white flex-1 rounded-xl w-80 max-w-2xl p-4 md:p-8 border border-gray-400">
        <div className="flex items-center justify-between">
          <h1 className="font-imbue text-xl md:text-2xl">Filters</h1>
          <div className="flex items-center">
            <GiSettingsKnobs className="ml-2 text-lg md:text-xl" />
          </div>
        </div>
        <div className="my-3 h-px bg-black w-full"></div>

        <div>
          <ul className="flex flex-col gap-4 mx-auto mt-4">
            <li>
              <details className="group">
                <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                  <span className="flex font-imbue gap-2">
                    <span>Provider</span>
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </summary>
                <div className="flex items-center p-2 rounded max-w-xl">
                  <span className="text-green-500">&gt;</span>
                  <input
                    type="text"
                    className="text-black ml-2 w-full"
                    placeholder="Search your provider"
                  />
                </div>
              </details>
            </li>

            <li>
              <details className="group">
                <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                  <span className="flex font-imbue gap-2">
                    <span>Location</span>
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </summary>
                <div className="flex items-center p-2 rounded max-w-xl">
                  <span className="text-green-500">&gt;</span>
                  <input
                    type="text"
                    className="text-black ml-2 w-full"
                    placeholder="Type the city name"
                  />
                </div>
              </details>
            </li>

            <li>
              <details className="group">
                <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                  <span className="flex font-imbue">
                    <span>Guests</span>
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </summary>

                <div
                  className="py-2 px-3 bg-white border border-gray-200 rounded-lg"
                  data-hs-input-number=""
                >
                  <div className="w-full flex justify-between items-center gap-x-3">
                    <input
                      className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0"
                      type="text"
                      value={value}
                      data-hs-input-number-input=""
                      onChange={handleChange}
                    />
                    <div className="flex justify-end items-center gap-x-1.5">
                      <button
                        type="button"
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={decrementValue}
                        disabled={value <= 0}
                      >
                        <svg
                          className="flex-shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        data-hs-input-number-increment=""
                        onClick={incrementValue}
                      >
                        <svg
                          className="flex-shrink-0 size-3.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </details>
            </li>
          </ul>
        </div>
        <div className="my-3 h-px bg-black"></div>
        <div className="flex items-center justify-between">
          <h1 className="font-imbue text-xl md:text-2xl">Price </h1>
          <div className="w-full mt-4">
            <Slider
              getAriaLabel={() => "Price range"}
              value={sliderValue}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
              sx={{
                color: "black",
                "& .MuiSlider-thumb": {
                  width: 24,
                  height: 24,
                  backgroundColor: "black",
                  "&:hover": {
                    boxShadow: "black",
                  },
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "black",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "black",
                },
              }}
            />
          </div>
        </div>
        <div className="my-3 h-px bg-black"></div>
        <details className="group">
          <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex font-imbue text-2xl gap-2">
              <span>Types</span>
            </span>
            <svg
              className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </summary>
          <div className="px-2 py-4 flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeClick(type)}
                className={`px-4 py-2 rounded-full ${
                  selectedType === type
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </details>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="bg-black flex text-white font-imbue py-4 mt-8 px-20 rounded-full">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
