import React, { useState } from "react";

function HookCounter() {
  const initial = 0;
  const [count, setCount] = useState(0);
  const Click1 = () => {
    setCount(initial);
  };
  const Click2 = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const Click3 = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="mt-40">
      <h1 className="text-5xl mb-10">Counter App</h1>
      <h1 className="text-9xl">{count}</h1>
      <div className="text-3xl mt-10 ">
        <button
          onClick={Click2}
          className="bg-green-400
          text-white rounded-full
       hover:text-black px-10 mx-5 hover:scale-110
       "
        >
          INCREASE
        </button>
        <button
          onClick={Click3}
          className="bg-red-400
          text-white
       hover:text-black px-10
        rounded-full  mx-5 hover:scale-110"
        >
          DECREASE
        </button>
        <div className="mt-10">
          <button
            onClick={Click1}
            className="bg-yellow-400
            rounded-full px-5
            text-white
      hover:text-black
      hover:scale-110
      "
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default HookCounter;
