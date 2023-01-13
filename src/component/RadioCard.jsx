import React from "react";
import { url } from "../data/url";

export default function RadioCard({ chan, setchanNow }) {
  // get a random url from the array
  const random = Math.floor(Math.random() * url.length);
  const pic = url[random];

  return (
    <div
      className="cursor-pointer  mx-auto p-2"
      onClick={() => setchanNow(chan)}
    >
      <img
        className="object-cover  w-32 lg:w-36 h-32 my-2 "
        src={
          chan.favicon === ""
            ? //inputting url to image tag
              `${pic}`
            : chan.favicon
        }
        alt={chan.name}
      />
      <div className="flex flex-col items-center w-32">
        <p className="text">{chan.name}</p>
        <p className="text-sm uppercase">{chan.country}</p>
      </div>
    </div>
  );
}
