import React from "react";

export default function SearchInput({setInput}) {
  return (
    <div>
      <div class="mb-3 w-4/12 px-2 pt-2">
        <div class="w-full mb-4">
          <input
            onChange={()=>setInput()}
            type="search"
            class=" text-white min-w-0 w-full px-3 py-1.5 border  font-normal  bg-transparent rounded-full transition ease-in-out m-0"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>
      </div>
    </div>
  );
}
