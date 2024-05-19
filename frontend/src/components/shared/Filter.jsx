import React from "react";
import { IoFilter } from "react-icons/io5";

function Filter() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center justify-center m-20 max-w-[400px] border border-red-600">
        <div className="flex items-center justify-between gap-48 p-6">
          <h2>Filters</h2>
          <IoFilter />
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Filter;
