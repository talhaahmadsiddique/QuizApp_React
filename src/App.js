import React, { useState } from "react";

const App = () => {
  const [excuse, setExcuse] = useState("");

  const fetchData = (excuse) => {
    fetch(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
      .then((res) => res.json())
      .then((data) => setExcuse(data[0].excuse));
    // console.log(fetchData);
  };
  return (
    <div className="h-screen w-screen flex justify-center py-20 bg-slate-400">
      <div className="flex flex-col gap-5 items-center ">
        <h1 className="text-red-200 text-6xl font-bold">Generate a excuse</h1>
        <button
          className="rounded-2xl bg-blue-200 w-fit px-5 py-2"
          onClick={() => fetchData("family")}
        >
          family
        </button>
        <button
          className="rounded-2xl bg-blue-200 w-fit px-5 py-2"
          onClick={() => fetchData("office")}
        >
          office
        </button>
        <button
          className="rounded-2xl bg-blue-200 w-fit px-5 py-2"
          onClick={() => fetchData("party")}
        >
          party
        </button>
        <div>
          <h1 className="text-red-200 text-6xl font-bold">{excuse}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
