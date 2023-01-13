import React from "react";

export default function RadioCard({chan,setchanNow}) {
  return (
    <div className="cursor-pointer  mx-auto p-2"
    onClick={()=>setchanNow(chan)}
    >
      <img
        className="object-cover  w-32 lg:w-36 h-32 my-2 "
        src={
            chan.favicon === ""
              ? "https://media.istockphoto.com/id/1139509180/photo/transistor-radio-receiver-on-wood-table-in-home-interior-3d.jpg?s=612x612&w=0&k=20&c=kB0lTO6XgUUqz23xrauFdB1xNnKiwADX31AWKabSeYg="
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
