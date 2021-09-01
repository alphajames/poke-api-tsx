import React from 'react'

interface Props {
    next: () => void, 
    prev: () => void,
}

const Pokemon:React.FC<Props> = ({next,prev}) => {
    return (
        <div>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Pokemon
