import Profile from "@/components/Profile";
import Image from "next/image";
import cicle from "../assets/svg/circle1.svg";
import waves from "../assets/svg/waves1.svg";

import { FiArrowRight, FiLayers } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";

export default function Home() {
  return (
    <div className="">
      <div className="mx-auto px-4 py-8 max-w-screen-xl">
        <div className="flex gap-24 mt-16">
          <Profile />
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="font-bold text-9xl">
                SOFTWARE <span className="text-gray-600">ENGINEER</span>
              </h2>
              <h4 className="mt-10 max-w-[80%] text-2xl text-gray-300">
                Passionate about creating intuitive and engaging user
                experiences. Specialize in transforming ideas into beautifully
                crafted products.
              </h4>
            </div>
            <div className="flex gap-12 py-10">
              <div>
                <h2 className="font-bold text-8xl">~3</h2>
                <p className="max-w-[80%] text-gray-500 text-xl">
                  YEARS OF EXPERIENCE
                </p>
              </div>
              <div>
                <h2 className="font-bold text-8xl">+18</h2>
                <p className="max-w-[80%] text-gray-500 text-xl">
                  PROJECTS COMPLETED
                </p>
              </div>
              <div>
                <h2 className="font-bold text-8xl">+28</h2>
                <p className="max-w-[80%] text-gray-500 text-xl">
                  WORKED LIBRARIES
                </p>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={cicle}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <FiLayers size={40} color="white" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-white">
                  VIDEO EDITOR WITH PIXI.JS
                </p>
                <div className="right-8 bottom-8 absolute border-2 border-white p-3 rounded-2xl">
                  <FiArrowRight size={30} color="white" />
                </div>
              </div>
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={waves}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <MdOutlineChat size={40} color="black" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-black">
                  AI CHAT WITH MULTIPLE LANGUAGES
                </p>
                <div className="right-8 bottom-8 absolute border-2 p-3 border-black rounded-2xl">
                  <FiArrowRight size={30} color="black" />
                </div>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={cicle}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <FiLayers size={40} color="white" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-white">
                  VIDEO EDITOR WITH PIXI.JS
                </p>
                <div className="right-8 bottom-8 absolute border-2 border-white p-3 rounded-2xl">
                  <FiArrowRight size={30} color="white" />
                </div>
              </div>
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={waves}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <MdOutlineChat size={40} color="black" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-black">
                  AI CHAT WITH MULTIPLE LANGUAGES
                </p>
                <div className="right-8 bottom-8 absolute border-2 p-3 border-black rounded-2xl">
                  <FiArrowRight size={30} color="black" />
                </div>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={cicle}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <FiLayers size={40} color="white" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-white">
                  VIDEO EDITOR WITH PIXI.JS
                </p>
                <div className="right-8 bottom-8 absolute border-2 border-white p-3 rounded-2xl">
                  <FiArrowRight size={30} color="white" />
                </div>
              </div>
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={waves}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <MdOutlineChat size={40} color="black" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-black">
                  AI CHAT WITH MULTIPLE LANGUAGES
                </p>
                <div className="right-8 bottom-8 absolute border-2 p-3 border-black rounded-2xl">
                  <FiArrowRight size={30} color="black" />
                </div>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={cicle}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <FiLayers size={40} color="white" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-white">
                  VIDEO EDITOR WITH PIXI.JS
                </p>
                <div className="right-8 bottom-8 absolute border-2 border-white p-3 rounded-2xl">
                  <FiArrowRight size={30} color="white" />
                </div>
              </div>
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={waves}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <MdOutlineChat size={40} color="black" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-black">
                  AI CHAT WITH MULTIPLE LANGUAGES
                </p>
                <div className="right-8 bottom-8 absolute border-2 p-3 border-black rounded-2xl">
                  <FiArrowRight size={30} color="black" />
                </div>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={cicle}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <FiLayers size={40} color="white" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-white">
                  VIDEO EDITOR WITH PIXI.JS
                </p>
                <div className="right-8 bottom-8 absolute border-2 border-white p-3 rounded-2xl">
                  <FiArrowRight size={30} color="white" />
                </div>
              </div>
              <div className="relative rounded-3xl w-80 h-72">
                <Image
                  src={waves}
                  alt="Yash Sharma"
                  className="border-2 border-black rounded-2xl"
                  fill
                  objectFit="cover"
                />
                <div className="top-8 left-8 absolute w-full h-full">
                  <MdOutlineChat size={40} color="black" />
                </div>
                <p className="absolute flex justify-center items-center px-8 w-full h-full font-semibold text-3xl text-black">
                  AI CHAT WITH MULTIPLE LANGUAGES
                </p>
                <div className="right-8 bottom-8 absolute border-2 p-3 border-black rounded-2xl">
                  <FiArrowRight size={30} color="black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
