import { useEffect, useState } from "react";
import { Header } from "./Components/header";
import { PokeCard } from "./Components/pokeCard";
import { SearchBar } from "./Components/searchBar";
import { PokeCardDetailed } from "./Components/pokeCardDetailed";

function App() {
  // const [pokeData, setPokeData] = useState(null); // Initialize pokeData state as null

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  //       const pokeapi = await response.json();
  //       setPokeData(pokeapi); // Store the retrieved data in pokeData state
  //     } catch (error) {
  //       console.log("Error:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array to run the effect only once

  const [pokes, setPokes] = useState([]);
  useEffect(() => {
    //usamos useEffect para llamar a la api una vez que se monta el componente
    const getPoke = async () => {
      //usamos fetch para llamar a una API Rest
      const httpRequest = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const respuesta = await httpRequest.json();
      // const pokemones = respuesta.results.map(async (poke) => {
      //   const respuestaURL = await fetch(poke.url).then((response) =>
      //     response.json()
      //   );
      //   return respuestaURL;
      // });
      // Promise.all(pokemones).then((data) => setPokes(data));
      setPokes(respuesta.results);
    };

    getPoke();
  }, []);

  console.log(pokes);

  return (
    <main className="bg-red-700 w-screen h-full flex flex-col items-center">
      <Header />
      <SearchBar />
      <ul className="relative flex flex-wrap justify-around gap-y-4 bg-slate-200 px-2 py-4 rounded-xl w-[97%]">
        {pokes.map((poke, index) => (
          <PokeCard pokemon={poke} key={index} />
        ))}
      </ul>

      <PokeCardDetailed pokemon={pokes} />
    </main>
  );
}

export default App;

//  const [filterStatus, setFilterStatus] = useState("text");
//  function handlerClick() {
//    if (filterStatus === "text") {
//      setFilterStatus("number");
//    } else {
//      setFilterStatus("text");
//    }
//  }
