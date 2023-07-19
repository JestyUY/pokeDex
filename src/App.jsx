import { useEffect, useState } from "react";
import { Header } from "./Components/header";
import { PokeCard } from "./Components/pokeCard";
import { SearchBar } from "./Components/searchBar";

const numIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_1112_297)">
      <rect width="32" height="32" rx="16" fill="white" />
      <path
        d="M12.7834 21.3333C12.6278 21.3333 12.5 21.2722 12.4 21.15C12.3 21.0278 12.2723 20.8889 12.3167 20.7333L12.8834 18.5H10.9667C10.8112 18.5 10.6806 18.4361 10.575 18.3083C10.4695 18.1806 10.4389 18.0389 10.4834 17.8833C10.5056 17.7722 10.5612 17.6806 10.65 17.6083C10.7389 17.5361 10.8445 17.5 10.9667 17.5H13.1334L13.8834 14.5H11.6334C11.4778 14.5 11.3473 14.4361 11.2417 14.3083C11.1362 14.1806 11.1056 14.0389 11.15 13.8833C11.1723 13.7722 11.2278 13.6806 11.3167 13.6083C11.4056 13.5361 11.5112 13.5 11.6334 13.5H14.1334L14.75 11.0333C14.7723 10.9222 14.825 10.8333 14.9084 10.7667C14.9917 10.7 15.0889 10.6667 15.2 10.6667C15.3556 10.6667 15.4806 10.7278 15.575 10.85C15.6695 10.9722 15.7 11.1111 15.6667 11.2667L15.1167 13.5H18.1334L18.75 11.0333C18.7723 10.9222 18.825 10.8333 18.9084 10.7667C18.9917 10.7 19.0889 10.6667 19.2 10.6667C19.3556 10.6667 19.4806 10.7278 19.575 10.85C19.6695 10.9722 19.7 11.1111 19.6667 11.2667L19.1167 13.5H21.0334C21.1889 13.5 21.3195 13.5639 21.425 13.6917C21.5306 13.8194 21.5612 13.9611 21.5167 14.1167C21.4945 14.2278 21.4389 14.3194 21.35 14.3917C21.2612 14.4639 21.1556 14.5 21.0334 14.5H18.8667L18.1167 17.5H20.3667C20.5223 17.5 20.6528 17.5639 20.7584 17.6917C20.8639 17.8194 20.8945 17.9611 20.85 18.1167C20.8278 18.2278 20.7723 18.3194 20.6834 18.3917C20.5945 18.4639 20.4889 18.5 20.3667 18.5H17.8667L17.25 20.9667C17.2278 21.0556 17.1806 21.1389 17.1084 21.2167C17.0362 21.2944 16.9278 21.3333 16.7834 21.3333C16.6278 21.3333 16.5 21.2722 16.4 21.15C16.3 21.0278 16.2723 20.8889 16.3167 20.7333L16.8834 18.5H13.8667L13.25 20.9667C13.2278 21.0556 13.1806 21.1389 13.1084 21.2167C13.0362 21.2944 12.9278 21.3333 12.7834 21.3333ZM14.1167 17.5H17.1334L17.8834 14.5H14.8667L14.1167 17.5Z"
        fill="#DC0A2D"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_1112_297"
        x="0"
        y="0"
        width="32"
        height="33"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="erode"
          in="SourceAlpha"
          result="effect1_innerShadow_1112_297"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1112_297"
        />
      </filter>
    </defs>
  </svg>
);
const textFilter = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_1024_1857)">
      <rect width="32" height="32" rx="16" fill="white" />
      <path
        d="M11.8333 20.6667C11.6888 20.6667 11.5694 20.6195 11.4749 20.525C11.3805 20.4306 11.3333 20.3111 11.3333 20.1667C11.3333 20.0222 11.3805 19.9028 11.4749 19.8084C11.5694 19.7139 11.6888 19.6667 11.8333 19.6667H20.1666C20.311 19.6667 20.4305 19.7139 20.5249 19.8084C20.6194 19.9028 20.6666 20.0222 20.6666 20.1667C20.6666 20.3111 20.6194 20.4306 20.5249 20.525C20.4305 20.6195 20.311 20.6667 20.1666 20.6667H11.8333ZM14.5499 15.2667H17.4499L16.0333 11.5667H15.9666L14.5499 15.2667ZM13.2833 18C13.1055 18 12.9888 17.9417 12.9333 17.825C12.8777 17.7084 12.8777 17.5667 12.9333 17.4L15.2666 11.1834C15.3221 11.0389 15.4194 10.9167 15.5583 10.8167C15.6971 10.7167 15.8444 10.6667 15.9999 10.6667C16.1555 10.6667 16.3027 10.7167 16.4416 10.8167C16.5805 10.9167 16.6777 11.0389 16.7333 11.1834L19.0666 17.4C19.1221 17.5667 19.1221 17.7084 19.0666 17.825C19.011 17.9417 18.8944 18 18.7166 18C18.6277 18 18.5471 17.975 18.4749 17.925C18.4027 17.875 18.3555 17.8167 18.3333 17.75L17.6833 16.0167H14.2999L13.6499 17.75C13.6277 17.8167 13.5805 17.875 13.5083 17.925C13.436 17.975 13.361 18 13.2833 18Z"
        fill="#DC0A2D"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_1024_1857"
        x="0"
        y="0"
        width="32"
        height="33"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="erode"
          in="SourceAlpha"
          result="effect1_innerShadow_1024_1857"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1024_1857"
        />
      </filter>
    </defs>
  </svg>
);
function App() {
  const [pokes, setPokes] = useState([]);
  const [filterQ, setFilterQ] = useState([]);
  useEffect(() => {
    //usamos useEffect para llamar a la api una vez que se monta el componente
    const getPoke = async () => {
      //usamos fetch para llamar a una API Rest
      const httpRequest = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const respuesta = await httpRequest.json();

      setPokes(respuesta.results);
    };
    getPoke();
  }, []);

  const [sortPoke, setSortPoke] = useState("text");

  const filter = () => {
    if (sortPoke === "text") {
      setSortPoke("number");
      const newSortt = [...pokes];
      const newNewSortt = newSortt.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      setPokes(() => [...newNewSortt]);

      // setPokes(newNewSortt);
    } else {
      setSortPoke("text");
      const newSortt = [...pokes];
      const newNewSortt = newSortt.sort(function (a, b) {
        a = +a.url.split("/").at(-2);
        b = +b.url.split("/").at(-2);
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      setPokes(() => [...newNewSortt]);
    }
    console.log(sortPoke);
  };

  useEffect(() => {
    setFilterQ(pokes);
  }, [pokes]);

  const searchingBar = (ev) => {
    const results = pokes.filter((poke) => {
      if (ev.target.value === "") return poke;
      return poke.name.toLowerCase().includes(ev.target.value.toLowerCase());
    });
    setFilterQ(results);
  };
  return (
    <main className="bg-red-700 w-screen h-full flex flex-col items-center font-poppins">
      <Header />
      <SearchBar
        buttonIcon={sortPoke === "text" ? numIcon : textFilter}
        handlerClick={filter}
        onChange={searchingBar}
      />
      <ul className="relative flex flex-wrap justify-around gap-y-4 bg-backGround px-2 py-4 mb-2 rounded-xl w-[97%]">
        {filterQ.map((poke, index) => (
          <PokeCard
            name={poke.name}
            id={poke.url.split("/").at(-2)}
            key={index}
            className={poke.name}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
