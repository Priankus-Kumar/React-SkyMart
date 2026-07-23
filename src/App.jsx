import React from "react";
import Navbar from "./components/Navbar";
import Approutes from "./routes/Approutes";
import axios from "axios";

const App = () => {
  return (
    <div className=" w-full bg-[#0F172A] text-white px-5">
      <div>
        <Navbar />
        <Approutes />
      </div>
    </div>
  );
};

export default App;
