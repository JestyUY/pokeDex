import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function PokeCard({ pokemon }) {
  const [currentPoke, setCurrentPoke] = useState({});
  useEffect(() => {
    //usamos useEffect para llamar a la api una vez que se monta el componente
    const getPoke = async () => {
      //usamos fetch para llamar a una API Rest
      // eslint-disable-next-line react/prop-types
      const httpRequest = await fetch(pokemon.url);
      const respuesta = await httpRequest.json();
      console.log(respuesta);
      setCurrentPoke(respuesta);
    };

    getPoke();
    // eslint-disable-next-line react/prop-types
  }, []);

  return (
    <li className="rounded-lg w-[104px] h-[108px] bg-slate-200 flex flex-col justify-center relative">
      <img
        className="scale-100 absolute z-10"
        src={currentPoke?.sprites?.front_default}
        alt=""
      />

      <span className="text-center bg-slate-300 pt-6 rounded-lg absolute bottom-0 left-0 right-0">
        {currentPoke?.name}
      </span>

      <span className="absolute top-0 right-2 z-20"># {currentPoke?.id}</span>
    </li>
  );
}
