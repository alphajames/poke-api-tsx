import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon'
import Pagination from './components/Pagination'
function App() {
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon');
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [pageLoading, setPageLoading] = useState<boolean>(true)
  const [next,setNext] = useState<any>();
  const [prev,setPrev] = useState<any>();  

  useEffect(() => {
    setPageLoading(false)
    // AXIOS GET DATA 
    axios.get(url).then(res => {
      setPokemon(res.data.results.map((pokemonName: { name: any; }) => pokemonName.name));
      setNext(res.data.next);
      setPrev(res.data.previous);
    });
  }, [url])

  // CHECK IF PAGE IS LOADING 
  if (pageLoading) return (<h1>Loading ... </h1>)

  // NEXT PAGE 
  const handleNext = () => { 
    setUrl(next);
  }

  // PREV PAGE 
  const handlePrev = () => { 
    setUrl(prev);
  }

  return (
    <div>
      <h1>Poke Api</h1>
      <Pokemon pokemon={pokemon} />
      <Pagination next={handleNext} prev={handlePrev}/>
    </div>
  )
}

export default App
