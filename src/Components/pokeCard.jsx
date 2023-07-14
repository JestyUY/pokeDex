import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function PokeCard({ pokemon }) {
  const navigate = useNavigate();
  const [currentPoke, setCurrentPoke] = useState({});
  useEffect(() => {
    const getPoke = async () => {
      // eslint-disable-next-line react/prop-types
      const httpRequest = await fetch(pokemon.url);
      const respuesta = await httpRequest.json();

      setCurrentPoke(respuesta);
    };

    getPoke();
    // eslint-disable-next-line react/prop-types
  }, []);

  const [filterStatus, setFilterStatus] = useState("text");
  function handlerClick() {
    if (filterStatus === "text") {
      setFilterStatus("number");
    } else {
      setFilterStatus("text");
    }
  }
  return (
    <li
      className="cursor-pointer rounded-lg w-[104px] h-[108px] bg-slate-200 flex flex-col justify-center relative drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)]"
      onClick={() => {
        navigate(`/${currentPoke?.id}`);
        handlerClick;
      }}
    >
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
