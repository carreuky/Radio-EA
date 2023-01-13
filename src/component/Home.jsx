import React from "react";
import { BiRadio } from "react-icons/bi";
import {useEffect, useState } from "react";


export default function Home() {
    const [country, setcountry] = useState("Kenya");
    const [chanList, setchanList] = useState([]);

    useEffect(() => {
        fetch(`https://at1.api.radio-browser.info/json/stations/bycountry/${country}`)
          .then((res) => res.json())
          .then((data) => {
            setchanList(data)
          });
      }, [country]);
 console.log(chanList)
  return (
    <div>
      <div className="flex">
        <span className="text-8xl">
          <BiRadio />
        </span>
        <span className=" text-5xl font-bold pt-10">Radio Mtaani</span>
      </div>

      <p>Where we get fast info from online radio streams</p>
      {/* <form role="form" class="relative flex w-16 ml-2 mt-4  rounded-full">
        <input type="text" placeholder="enter your search here" class="rounded-full flex-1 px-6 text-gray-700 focus:outline-none"/>
        <button class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-2 mx-2 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search</button>
      </form> */}
      <div class="grid  lg:grid-cols-3 gap-4">
        <div class=" shadow-lg rounded p-3">
          <img
            class="w-full lg:w-3/4 object-cover object-center"
            src="https://kingosiemo.files.wordpress.com/2022/01/wp-1641279009174.png?w=180"
            alt="avatar"
          />

          <div class="p-5">
            <h3 class="text-white text-lg">Awake</h3>
            <p class="text-gray-400">Tycho</p>
          </div>
        </div>
        <div class="lg:col-span-2 border rounded h-96">
        
          <div className="flex">
            <div class="flex flex-col items-center p-2">
              <img
                class="object-cover w-32 h-32 my-2  shadow"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div class="flex flex-col items-center">
                <p class="text-lg font-bold">Oliver Aguilerra</p>
                <p class="text-sm ">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
