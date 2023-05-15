import { useState } from "react";
import Button from "./Button";

export default function SortFunction({ handleSort }) {
  const [sortInput, setSortInput] = useState("id_asc");
  return (
    <div className="flex flex-row justify-between items-center gap-2 bg-off-white w-[400px] rounded-3xl">
      <select
        value={sortInput}
        onChange={(e) => setSortInput(e.target.value)}
        className="w-full h-full rounded-3xl bg-off-white p-3"
      >
        <option value="id_asc">Sort by ID: Ascending</option>
        <option value="id_desc">Sort by ID: Descending</option>
        <option value="name_az">Sort by name: A to Z</option>
        <option value="name_za">Sort by name: Z to A</option>
      </select>
      <Button text="Sort" onClick={() => handleSort(sortInput)} />
    </div>
  );
}
