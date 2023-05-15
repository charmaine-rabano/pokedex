import Image from "next/image";
import Button from "./Button";
import getWeakness from "../utils/getWeakness";

export default function DetailView({ pokemon, setSelected, max }) {
  const weakness = getWeakness(pokemon.types.map((p) => p.type.name));
  return (
    <>
      <div className="bg-navy-blue w-full h-full fixed top-0 opacity-90"></div>
      <div className="bg-off-white w-[98vw] md:w-[80vw] h-[85vh] m-auto rounded-[85px] fixed overflow-y-auto scrollbar-hide">
        <div className="w-full h-full p-6 md:p-14">
          <button
            className="absolute top-12 right-12"
            onClick={() => setSelected(null)}
          >
            <Image src="/close-icon.png" alt="" width={30} height={30} />
          </button>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-32">
            <Image
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
              width={300}
              height={300}
            />
            <div className="flex flex-col text-navy-blue text-xl font-medium gap-2 md:w-1/2">
              <p className="text-3xl">{pokemon.id}</p>
              <p className="text-denim-blue font-black text-4xl md:text-6xl mb-5">
                {pokemon.name.toUpperCase()}
              </p>
              <p>
                <span className="font-light">Height:</span> {pokemon.height} dm
              </p>
              <p>
                <span className="font-light">Weight:</span> {pokemon.weight} hg
              </p>
              <p>
                <span className="font-light">Type/s:</span>{" "}
                {pokemon.types.map((t) => t.type.name + "; ")}
              </p>
              <p>
                <span className="font-light">Weaknesses:</span>{" "}
                {weakness.map((w) => w + "; ")}
              </p>
              <p>
                <span className="font-light">Abilities:</span>{" "}
                {pokemon.abilities.map((a) => a.ability.name + "; ")}
              </p>
            </div>
          </div>
          <div className="py-10 flex flex-row gap-2 justify-center">
            {pokemon.id != 1 && (
              <Button
                yellow
                text="Previous"
                onClick={() => setSelected((s) => s - 1)}
              />
            )}
            {!max && (
              <Button
                yellow
                text="Next"
                onClick={() => setSelected((s) => s + 1)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
