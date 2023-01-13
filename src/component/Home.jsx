import React from "react";
import { BiRadio } from "react-icons/bi";
import { useEffect, useState } from "react";
import RadioCard from "./RadioCard";

export default function Home() {
  const [country, setcountry] = useState("Kenya");
  const [chanList, setchanList] = useState([]);
  const [chanNow, setchanNow] = useState();

  useEffect((station = "Classic 105") => {
    fetch(`https://at1.api.radio-browser.info/json/stations/byname/${station}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => setchanNow(item));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://at1.api.radio-browser.info/json/stations/bycountry/${country}`
    )
      .then((res) => res.json())
      .then((data) => {
        setchanList(data);
      });
  }, [country]);
  return (
    <div>
      <div className="flex">
        <span className="text-8xl">
          <BiRadio />
        </span>
        <span className=" text-5xl font-bold pt-10">Radio Mtaani</span>
      </div>

      <div className="flex flex-wrap">
        <p className="p-4 lg:w-5/12">
          Where we get fast info from online radio streams
        </p>
        <div className=" lg:w-7/12">
          <button className="border text-white font-medium py-2 px-4 mr-2 mb-2 rounded-full">
            Kenya
          </button>
          <button
            className="border text-white font-medium py-2 px-4 mr-2 mb-2  rounded-full"
            onClick={() => setcountry("Uganda")}
          >
            Uganda
          </button>
          <button
            className="border text-white font-medium py-2 px-4 mr-2 mb-2  rounded-full"
            onClick={() => setcountry("Tanzania")}
          >
            Tanzania
          </button>
          <button
            className="border text-white font-medium py-2 px-4 mr-2 mb-2  rounded-full"
            onClick={() => setcountry("Rwanda")}
          >
            Rwanda
          </button>
        </div>
      </div>

      <div className="lg:flex">
        <div className="lg:w-5/12 shadow-lg rounded p-3">
          <img
            className="w-full lg:w-3/4 object-cover object-center"
            src="https://images.pexels.com/photos/3822728/pexels-photo-3822728.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="avatar"
          />

          <div className="pr-5">
            <h3 className="text-white text-3xl">{chanNow?.name}</h3>
            <h3 className="text-white text-2xl">{chanNow?.tags}</h3>
            <p className="text-gray-400">{chanNow?.country}</p>
            <audio
              className="my-4 lg:w-72 w-60"
              src={chanNow?.url}
              controls
              autoplay
            ></audio>
          </div>
        </div>
        <div className=" lg:w-7/12 border rounded overflow-y-auto ">
          <div className="flex flex-wrap h-96">
            {chanList.map((chan) => {
              return <RadioCard chan={chan} setchanNow={setchanNow} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
