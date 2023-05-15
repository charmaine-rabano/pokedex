import CardView from "./CardView";

export default function SearchResult({ searchResult, setSelected }) {
  return (
    <div className="w-11/12 flex flex-col items-center">
      <h2 className="text-3xl font-black text-off-white">Search Result</h2>
      {searchResult ? (
        <CardView pokemon={searchResult} setSelected={setSelected} />
      ) : (
        <p className="text-xl font-medium text-off-white my-10">
          No results found.
        </p>
      )}
      <hr className="border-off-white border-2 w-full" />
    </div>
  );
}
