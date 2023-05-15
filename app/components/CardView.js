import Image from "next/image";
import Button from "./Button";

export default function CardView({ pokemon, setSelected }) {
  return (
    <div className="bg-off-white m-10 rounded-[70px] w-[340px] h-[430px] flex flex-col justify-center items-center hover:border-8 hover:border-yellow">
      <Image
        src={pokemon.sprites.other.home.front_default}
        alt={pokemon.name}
        width="170"
        height="170"
        className="mb-4"
      />
      <p className="text-xl text-navy-blue font-medium">{pokemon.id}</p>
      <p className="text-3xl text-denim-blue font-black mb-2">
        {pokemon.name.toUpperCase()}
      </p>
      <div className="flex flex-row gap-2 mb-10">
        {pokemon.types.map((t) => (
          <p
            key={t.type.name}
            className="bg-[#1E355C] text-off-white py-1 px-4 rounded-full"
          >
            {t.type.name}
          </p>
        ))}
      </div>
      <Button
        yellow
        text="View Details"
        onClick={() => setSelected(pokemon.id)}
      />
    </div>
  );
}
