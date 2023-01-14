import React from "react";
import { BiRadio } from "react-icons/bi";
import { useEffect, useState } from "react";
import RadioCard from "./RadioCard";
import SearchInput from "./SearchInput";
import { data } from "../data/data";
import ReactAudioPlayer from 'react-audio-player';


export default function Home() {
  // global state
  const [country, setcountry] = useState("Kenya");
  const [chanList, setchanList] = useState([]);
  const [chanNow, setchanNow] = useState();
  const [input, setInput] = useState("");

  // fetching url to from the station apis stations
  useEffect((station = "Classic 105") => {
    fetch(`https://at1.api.radio-browser.info/json/stations/byname/${station}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => setchanNow(item));
      })
      .catch((err) => console.log(err));
  }, []);

  // fetching url to from the country apis stations

  useEffect(() => {
    fetch(
      `https://at1.api.radio-browser.info/json/stations/bycountry/${country}`
    )
      .then((res) => res.json())
      .then((data) => {
        setchanList(data);
      });
  }, [country]);

  // filtering data from API.

  const filteredData = chanList.filter((chan) => {
    if (input === "") {
      return chan;
    } else {
      return chan.name.toLowerCase().includes(input.toLowerCase());
    }
  });
  return (
    <div>
      <div className="flex">
        {/* //Heading */}
        <span className="text-8xl">
          <BiRadio />
        </span>
        <span className=" text-5xl font-bold lg:pt-10 pt-4">Radio Mtaani</span>
      </div>

      <div className="flex flex-wrap">
        <p className="p-4 lg:w-5/12">
          Your only East Africa online Radio App...
        </p>
        <div className="lg:w-7/12 flex flex-wrap ">
          <div>
            {/* //mapping data to cards */}
            {data.map((data) => {
              return (
                <button
                  key={data?.id}
                  className="border text-white font-medium py-2 px-4 mr-2 mb-2 rounded-full"
                  onClick={() => setcountry(data.name)}
                >
                  {data.name}
                </button>
              );
            })}
          </div>
          {/* Search component */}
          <div className="lg:pl-[78px] hidden lg:block">
            <SearchInput setInput={setInput} />
          </div>
        </div>
      </div>

      <div className="lg:flex lg:mt-2">
        <div className="lg:w-5/12  rounded p-3">
          <img
            className=" object-fit objcet-center w-full h-72 lg:w-3/4 object-cover object-center"
            //Getting a diffrent image url when the channel list string is empty
            src={
              chanNow?.favicon === ""
                ? "https://images.pexels.com/photos/3822728/pexels-photo-3822728.jpeg?auto=compress&cs=tinysrgb&w=400"
                : chanNow?.favicon
            }
            alt={chanNow?.name}
          />

          <div className="pr-5">
            <h3 className="text-white text-3xl">{chanNow?.name}</h3>
            <h3 className="text-white text-2xl">{chanNow?.tags}</h3>
            <p className="text-gray-400">{chanNow?.country}</p>
            <audio
              className="my-4 lg:w-72 w-60"
              src={chanNow?.url}
              controls
              autoPlay
            ></audio>
            <div className="lg:invisible">
              <SearchInput setInput={setInput} />
            </div>
          </div>
        </div>
        <div className={`lg:w-7/12  rounded overflow-y-auto  ${ filteredData.length== 0 ? `` : `border`}`}>
          <div className={`flex flex-wrap mx-auto  ${ filteredData.length== 0 ? `` : `h-96`}`}>
            {/* //mapping data into radio card*/}
            <p className="m-2">{filteredData.length== 0?'Radio not found':''}</p>
            {filteredData.map((chan) => {
              return (
                <RadioCard
                  key={chan?.stationuuid}
                  chan={chan}
                  setchanNow={setchanNow}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
