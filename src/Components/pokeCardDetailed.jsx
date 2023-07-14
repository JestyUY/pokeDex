import { Link, useParams } from "react-router-dom";

export function PokeCardDetailed({ pokemon }) {
  let { pokeID } = useParams();
  const poke = pokemon?.find((p) => p?.id == pokeID);
  console.log(poke);
  return (
    <div>
      {" "}
      <Link to={"/"}>
        {" "}
        <button className="h-6 w-5 bg-gray-600"></button>
      </Link>
      <span className="text-9xl">{poke?.name}</span>
    </div>
  );
}
