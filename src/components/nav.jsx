import React, { useState } from "react";
import { Menu } from "lucide-react";

const nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-50 fixed top-0 right-0 ">
      <div className="flex justify-center items-center  bg-red-700  h-14 w-screen overflow-hidden ">
        <div className="w-full  px-6 justify-between items-center flex">
          <div className="flex ">
            <div>
              <img
                className=" h-14 rounded-full"
                src="logo.png"
                alt="TopUp BD Logo"
              />
            </div>
            <div className="  font-bold text-white px-4">
              <p>TopUp BD</p>
              <p className="hidden md:block" >Ultimate Destination for Gamers</p>
            </div>
          </div>
          {/* nav links */}
          <div className="  font-bold text-white px-4 gap-x-5 justify-center items-center md:flex hidden">
            <p>TopUp</p>
            <p>Memnerships</p>
            <p>Evo Guns </p>
          </div>

          <div className="md:hidden">
            <div onClick={() => setOpen((p) => !p)}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
      {open && <div className="bg-red-300">ddd</div>}
    </div>
  );
};

export default nav;
