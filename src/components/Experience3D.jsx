import React from "react";
import Spline from "@splinetool/react-spline";
import { my_3d_mod } from "../constant";

export const Experience3D = () => {
  return (
    <section className="px-3 sm:px-10">
      <main className="flexCenter lg:flex-row flex-col">
        <div className="w-full lg:w-[30%]  ">
          <h2 className="text-4xl txtOutlineCSS gradient-text_tshirt pb-7">
            Some of my 3D Models made using Blender 3D
          </h2>
          <p className=" text-[#a6b5ebc2]">
            My passion for 3D design led me to explore Blender 3D ✨ and
            undertake various projects. I'm particularly interested in 3D gaming
            asset modeling, 3D modelling and animation. This reflects my
            enthusiasm for the metaverse and 3D technologies, where I firmly
            believe that genuine interest fuels effective learning and
            implementation. I 💖 3D modelling, Animation, VR, Gaming...
          </p>
        </div>
        <div className="flexCenter gap-10 flex-wrap w-full lg:w-[70%] h-full lg:py-0 py-10">
          {my_3d_mod.map((ele, i) => {
            return (
              <div
                key={i}
                className="border-[1px] rounded-xl w-full lg:w-[286px] h-full lg:h-[286px] hover:cursor-grab flexCenter"
              >
                <Spline scene={ele.scene_link} />
              </div>
            );
          })}
        </div>
      </main>

      {/* ============== 3D thirt ============== */}
      {/* <main className="flexCenter flex-wrap w-full">
        <h2 className="max-w-[580px] px-3 txtOutlineCSS gradient-text_tshirt text-xl sm:text-4xl pb-4 w-auto sm:w-[30%] text-center">
          Adding 3D components to Website
        </h2>
        <div className="flexCenter w-full sm:w-[60%] h-full sm:h-[500px] hover:cursor-grab">
          <Spline_tshirt />
        </div>
      </main> */}

      {/* ============== 3D Bike with animation ============== */}
      {/* <main className="flexCenter flex-wrap-reverse w-full">
        <div className="flexCenter w-full sm:w-[60%] h-full sm:h-[500px] hover:cursor-grab">
          <Spline_bike />
        </div>
        <h2 className="max-w-[580px] px-3 txtOutlineCSS gradient-text_tshirt text-xl sm:text-4xl pb-4 w-auto sm:w-[30%]">
          3D Animations
        </h2>
      </main> */}

      {/* ============== My 3D models Blender  ============== */}
    </section>
  );
};
