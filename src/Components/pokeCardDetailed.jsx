import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function PokeCardDetailed() {
  let { pokeID } = useParams();

  const [poke, setPoke] = useState();
  useEffect(() => {
    const getPoke = async () => {
      // eslint-disable-next-line react/prop-types
      const httpRequest = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeID}`
      );
      const respuesta = await httpRequest.json();

      setPoke(respuesta);
    };

    getPoke();
    // eslint-disable-next-line react/prop-types
  }, []);
  return poke ? (
    <div>
      {" "}
      <Link to={"/"}>
        {" "}
        <button className="h-6 w-5 bg-gray-600"></button>
      </Link>
      <span className="text-xl">{poke?.name}</span>
      <img src={poke.sprites} alt="" />
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}
