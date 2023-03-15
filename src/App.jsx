import Home from "./component/Home";
import { RiHeartsFill } from "react-icons/ri"
import {Analytics} from "@vercel/analytics/react"


function App() {
  return (
    <>
    <div className="App p-8 pb-2 bg-[#052e3b] h-full font-poppins text-white">
      <Home />
      <div className=" mt-8 flex justify-center">
        Carreuky Design
        <span className="text-2xl px-2 text-[#b91c1c]">
          <RiHeartsFill />
        </span>
      </div>
    </div>
    <Analytics/>
    </>
  );
}

export default App;
