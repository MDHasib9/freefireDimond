import React from "react";

const nav = () => {
  return (
    <div className="flex justify-center items-center  bg-red-700  h-14 w-screen overflow-hidden ">
      <div className="w-full  px-7">
        <div className="flex  ">

          <div>
            <img
              className=" h-14 rounded-full"
              src="logo.png"
              alt="  "
              />
          </div>
          <div>
              <p>Hasib</p>
              <p>Ultimate Destination for Gamers</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default nav;
