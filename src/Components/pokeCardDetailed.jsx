import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PastillasClass } from "./PastillaClass";
import { AboutCard } from "./AboutCard";
import { Parrafo } from "./Parrafo";
import { BaseStats } from "./BaseStats";
const leftArrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1164_988)">
      <path
        d="M13.475 17.45L8.52505 12.5C8.44171 12.4167 8.38338 12.3333 8.35005 12.25C8.31672 12.1667 8.30005 12.075 8.30005 11.975C8.30005 11.875 8.31672 11.7833 8.35005 11.7C8.38338 11.6167 8.44171 11.5333 8.52505 11.45L13.5 6.475C13.65 6.325 13.8292 6.25 14.0375 6.25C14.2459 6.25 14.425 6.325 14.575 6.475C14.725 6.625 14.7959 6.80833 14.7875 7.025C14.7792 7.24167 14.7 7.425 14.55 7.575L10.15 11.975L14.575 16.4C14.725 16.55 14.8 16.725 14.8 16.925C14.8 17.125 14.725 17.3 14.575 17.45C14.425 17.6 14.2417 17.675 14.025 17.675C13.8084 17.675 13.625 17.6 13.475 17.45Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1164_988"
        x="4.30005"
        y="3.25"
        width="14.5"
        height="19.425"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_1164_988"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1164_988"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1164_988"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const backArrow = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1132_572)">
      <path
        d="M14.8999 25.9666L5.63325 16.6999C5.52214 16.5888 5.44436 16.4777 5.39992 16.3666C5.35547 16.2555 5.33325 16.1333 5.33325 15.9999C5.33325 15.8666 5.35547 15.7444 5.39992 15.6333C5.44436 15.5222 5.52214 15.4111 5.63325 15.2999L14.9333 5.99994C15.111 5.82216 15.3333 5.73328 15.5999 5.73328C15.8666 5.73328 16.0999 5.83328 16.2999 6.03328C16.4999 6.23328 16.5999 6.46661 16.5999 6.73328C16.5999 6.99994 16.4999 7.23328 16.2999 7.43328L8.73325 14.9999H25.2666C25.5555 14.9999 25.7944 15.0944 25.9833 15.2833C26.1721 15.4722 26.2666 15.7111 26.2666 15.9999C26.2666 16.2888 26.1721 16.5277 25.9833 16.7166C25.7944 16.9055 25.5555 16.9999 25.2666 16.9999H8.73325L16.3333 24.5999C16.511 24.7777 16.5999 24.9999 16.5999 25.2666C16.5999 25.5333 16.4999 25.7666 16.2999 25.9666C16.0999 26.1666 15.8666 26.2666 15.5999 26.2666C15.3333 26.2666 15.0999 26.1666 14.8999 25.9666Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1132_572"
        x="1.33325"
        y="2.73328"
        width="28.9333"
        height="28.5333"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_1132_572"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1132_572"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1132_572"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const pokeBackground = (
  <svg
    width="208"
    height="208"
    viewBox="0 0 208 208"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.1">
      <path
        d="M128.762 104C128.762 117.676 117.676 128.762 104 128.762C90.3244 128.762 79.2381 117.676 79.2381 104C79.2381 90.3244 90.3244 79.2381 104 79.2381C117.676 79.2381 128.762 90.3244 128.762 104Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M104 208C156.393 208 199.738 169.257 206.947 118.857H146.035C139.917 136.169 123.407 148.571 104 148.571C84.5933 148.571 68.0835 136.169 61.9648 118.857H1.05322C8.26235 169.257 51.6067 208 104 208ZM61.9648 89.1429H1.05322C8.26235 38.7431 51.6067 0 104 0C156.393 0 199.738 38.7431 206.947 89.1429H146.035C139.917 71.8314 123.407 59.4286 104 59.4286C84.5933 59.4286 68.0835 71.8314 61.9648 89.1429ZM128.762 104C128.762 117.676 117.676 128.762 104 128.762C90.3244 128.762 79.2381 117.676 79.2381 104C79.2381 90.3244 90.3244 79.2381 104 79.2381C117.676 79.2381 128.762 90.3244 128.762 104Z"
        fill="white"
      />
    </g>
  </svg>
);

const rightArrow = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1164_990)">
      <path
        d="M8.84995 17.45C8.71662 17.2834 8.64579 17.1 8.63745 16.9C8.62912 16.7 8.69995 16.525 8.84995 16.375L13.25 11.975L8.82495 7.55003C8.69162 7.4167 8.62912 7.23753 8.63745 7.01253C8.64579 6.78753 8.71662 6.60837 8.84995 6.47503C9.01662 6.30837 9.19579 6.2292 9.38745 6.23753C9.57912 6.24587 9.74995 6.32503 9.89995 6.47503L14.875 11.45C14.9583 11.5334 15.0166 11.6167 15.05 11.7C15.0833 11.7834 15.1 11.875 15.1 11.975C15.1 12.075 15.0833 12.1667 15.05 12.25C15.0166 12.3334 14.9583 12.4167 14.875 12.5L9.92495 17.45C9.77495 17.6 9.59995 17.6709 9.39995 17.6625C9.19995 17.6542 9.01662 17.5834 8.84995 17.45Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1164_990"
        x="4.63672"
        y="3.23694"
        width="14.4631"
        height="19.4263"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_1164_990"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1164_990"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1164_990"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

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
  }, [pokeID]);

  const navigate = useNavigate();
  const [pokeAbout, setPokeAbout] = useState();
  useEffect(() => {
    const getPoke = async () => {
      // eslint-disable-next-line react/prop-types
      const httpRequest = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokeID}`
      );
      const respuesta = await httpRequest.json();

      setPokeAbout(respuesta);
    };

    getPoke();
    // eslint-disable-next-line react/prop-types
  }, [pokeID]);

  function backClick() {
    if (poke.id > 1) {
      navigate(`/${poke.id - 1} `);
    }
  }
  function fowardClick() {
    if (poke.id <= 19) {
      navigate(`/${poke.id + 1}`);
    }
  }
  return poke ? (
    <div
      className={`bg ${poke.types[0].type.name}   w-screen h-[130vh] absolute flex flex-col`}
    >
      {" "}
      <nav className="flex p-4 gap-2">
        <Link to={"/"}>
          {" "}
          <button className={`h-6 w-5`}>{backArrow}</button>
        </Link>
        <span className="text-4xl text-white pl-4">{poke?.name}</span>
        <span className="text-white text-xl absolute right-6 top-5">
          #{poke.id}
        </span>
      </nav>
      <div className="absolute top-5 right-5 scale-110 z-10">
        {pokeBackground}
      </div>
      <div className="w-[100%] absolute left-0 right-0 mx-auto top-52 justify-between flex z-40">
        <button onClick={backClick}>{poke.id === 1 ? "" : leftArrow}</button>
        <button onClick={fowardClick}>
          {poke.id === 20 ? "" : rightArrow}
        </button>
      </div>
      <img
        className="  absolute mx-auto top-16 left-0 right-0 z-20 w-[60%] h-[30%]"
        src={poke.sprites.other.dream_world.front_default}
        alt=""
      />
      <section className="w-[96%] flex flex-col h-[60%]  absolute bottom-3 left-0 right-0 gap-4  mx-auto rounded-lg bg-lightGray ">
        <div className="w-[95%] flex justify-center mt-3 gap-4">
          <PastillasClass
            typeColor={`bg ${poke.types[0].type.name}`}
            type={poke.types[0].type.name}
          />

          {poke.types.length > 1 ? (
            <PastillasClass
              typeColor={`bg ${poke.types[1].type.name}`}
              type={poke?.types[1].type.name}
            />
          ) : null}
        </div>
        <span
          className={`text ${poke.types[0].type.name} justify-center flex  text-2xl font-semibold`}
        >
          About
        </span>
        <AboutCard
          weight={poke.weight}
          height={poke.height}
          moves={poke.moves[0].move.name}
          moves2={poke.moves[1].move.name}
        />
        <Parrafo aboutContent={pokeAbout?.flavor_text_entries[0].flavor_text} />
        <span
          className={`text ${poke.types[0].type.name} justify-center flex  text-2xl font-semibold`}
        >
          Base Stats
        </span>

        <BaseStats
          type={poke.types[0].type.name}
          hpValue={poke.stats[0].base_stat}
          atkValue={poke.stats[1].base_stat}
          defValue={poke.stats[2].base_stat}
          spatkValue={poke.stats[3].base_stat}
          spdefValue={poke.stats[4].base_stat}
          spdValue={poke.stats[5].base_stat}
        />
      </section>
    </div>
  ) : (
    <div>
      <h2 className="text-5xl">Loading...</h2>
      <img src="https://i.gifer.com/9xnj.gif" alt="" />
    </div>
  );
}
