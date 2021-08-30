import React from 'react'

interface Props {
    pokemon:String[]
}

const Pokemon:React.FC<Props> = ({pokemon}) => {
    return (
        <div>
            {pokemon.map(pokemonName => (<p>{pokemonName}</p>))}
        </div>
    )
}

export default Pokemon
