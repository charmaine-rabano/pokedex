import { useState } from "react";
import Button from "./Button";

export default function SearchFunction({ handleSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-row gap-2 justify-between items-center bg-off-white w-[400px] rounded-3xl">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter ID or name"
        className="w-full h-full rounded-3xl bg-off-white p-3"
      ></input>
      <button
        onClick={() => {
          handleSearch(null);
          setInput("");
        }}
        className="font-light"
      >
        clear
      </button>
      <Button text="Search" onClick={() => handleSearch(input)} />
    </div>
  );
}
