import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function PokeCard({ name, id, className }) {
  const navigate = useNavigate();

  return (
    <li
      className={`    cursor-pointer rounded-lg w-[104px] h-[108px] bg-slate-200 flex flex-col justify-center relative drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)]`}
      onClick={() => {
        navigate(`/${id}`);
      }}
    >
      <img
        className="scale-100 absolute z-10"
        src={`
              https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=""
      />

      <span
        className={`text-center ${className}  pt-6 rounded-lg absolute bottom-0 left-0 right-0`}
      >
        {name}
      </span>

      <span className="absolute top-0 right-2 z-20"># {id}</span>
    </li>
  );
}
