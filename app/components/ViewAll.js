import { useState } from "react";
import SortFunction from "./SortFunction";
import SearchFunction from "./SearchFunction";
import SearchResult from "./SearchResult";
import CardView from "./CardView";
import Button from "./Button";

export default function ViewAll({ data, handleSort, setSelected, onLoad }) {
  const [searchInput, setSearchInput] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  function handleSearch(input) {
    if (input) {
      setSearchResult(data.find((p) => p.id == input || p.name == input));
    }
    setSearchInput(input);
  }
  return (
    <div className="flex flex-col items-center gap-10 py-10 w-full">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <SortFunction handleSort={handleSort} />
        <SearchFunction handleSearch={handleSearch} />
      </div>
      {searchInput && (
        <SearchResult searchResult={searchResult} setSelected={setSelected} />
      )}
      <div className="flex flex-row flex-wrap justify-center items-center w-full">
        {data.map((p) => {
          return <CardView key={p.id} pokemon={p} setSelected={setSelected} />;
        })}
      </div>
      <Button text="Load More" onClick={onLoad} />
    </div>
  );
}
