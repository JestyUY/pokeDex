import { useEffect, useState } from "react";
import { Header } from "./Components/header";
import { PokeCard } from "./Components/pokeCard";
import { SearchBar } from "./Components/searchBar";

function App() {
  const [pokes, setPokes] = useState([]);
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

  function filter() {
    if (sortPoke === "text") {
      setSortPoke("number");
      const newSort = [...pokes];
      const newNewSort = newSort.sort((a, b) => a.name.localeCompare(b.name));
      setPokes(newNewSort);
    } else {
      setSortPoke("text");
      const newSortt = [...pokes];
      const newNewSortt = newSortt.sort();
      setPokes(newNewSortt);
      console.log(sortPoke);
    }
  }
  return (
    <main className="bg-red-700 w-screen h-full flex flex-col items-center">
      <Header />
      <SearchBar handlerClick={filter} />
      <ul className="relative flex flex-wrap justify-around gap-y-4 bg-slate-200 px-2 py-4 rounded-xl w-[97%]">
        {pokes.map((poke, index) => (
          <PokeCard
            name={poke.name}
            id={poke.url.split("/").at(-2)}
            key={index}
          />
        ))}
      </ul>
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
