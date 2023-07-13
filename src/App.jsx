import { useEffect, useState } from "react";
import { Header } from "./Components/header";

function App() {
  const [pokeData, setPokeData] = useState(null); // Initialize pokeData state as null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const pokeapi = await response.json();
        setPokeData(pokeapi); // Store the retrieved data in pokeData state
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  if (!pokeData) {
    // Render loading or placeholder content while data is being fetched
    return <div>Loading...</div>;
  }

  // Render the actual content using the pokeData
  return (
    <main className="bg-red-700 w-screen h-screen flex flex-col items-center">
      <Header />
      <ul className="flex flex-wrap w-[95%]  bg-slate-300 h-[97%] gap-y-3 justify-around ">
        {pokeData.results.map((pokemon) => (
          <li
            className="w-[104px] h-[108px] text-center flex flex-col relative "
            key={pokemon.name}
          >
            <span className="right-0 absolute"># {}</span>
            <span className="pt-6 px-2 pb-1 rounded-t-lg bg-slate-400  absolute bottom-0 left-0 right-0">
              {pokemon.name}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
