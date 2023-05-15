"use client";

import { useEffect, useState } from "react";
import ViewAll from "./ViewAll";
import DetailView from "./DetailView";

export default function Content() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [nextLoad, setNextLoad] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const [selected, setSelected] = useState(null);
  const [sorting, setSorting] = useState("id_asc");

  function sortAllPokemon(sortInput) {
    setSorting(sortInput);
    setAllPokemon((prev) => sortPokemonData(prev, sortInput));
  }

  function sortPokemonData(data, sorting) {
    switch (sorting) {
      case "id_asc":
        return data.sort((a, b) => a.id - b.id);
      case "id_desc":
        return data.sort((a, b) => b.id - a.id);
      case "name_az":
        return data.sort((a, b) => a.name.localeCompare(b.name));
      case "name_za":
        return data.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return data.sort((a, b) => a.id - b.id);
    }
  }

  async function getAllPokemon() {
    const res = await fetch(nextLoad);
    const data = await res.json();

    setNextLoad(data.next);

    function getEachPokemon(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        setAllPokemon((prev) => sortPokemonData([...prev, data], sorting));
      });
    }

    getEachPokemon(data.results);
  }

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <>
      {allPokemon && (
        <ViewAll
          data={allPokemon}
          handleSort={sortAllPokemon}
          setSelected={setSelected}
          onLoad={getAllPokemon}
        />
      )}
      {selected && (
        <DetailView
          pokemon={allPokemon.find((p) => p.id == selected)}
          setSelected={setSelected}
          max={allPokemon.length == selected}
        />
      )}
    </>
  );
}
