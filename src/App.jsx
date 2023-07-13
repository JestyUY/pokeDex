import { useEffect, useState } from "react";

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
    <>
      <h1>Pokemon List</h1>
      <ul>
        {pokeData.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
