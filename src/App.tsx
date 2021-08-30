import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon'

function App() {
 const [pokemon,setPokemon] = useState<string[]>([]);
 const [pageLoading,setPageLoading] = useState<boolean>(true)
 const [url,seturl] = useState<string>('https://pokeapi.co/api/v2/pokemon');

useEffect( () => {
  setPageLoading(false)
  // AXIOS GET DATA 
 axios.get(url).then(res  => { 
  setPokemon(res.data.results.map((pokemonName: { name: any; }) => pokemonName.name));
});
},[url])

// CHECK IF PAGE IS LOADING 
if (pageLoading) return (<h1>Loading ... </h1>)


  return (
    <div>
      <h1>Poke Api</h1>
      <Pokemon pokemon={pokemon}/>
    </div>
  )
}

export default App
