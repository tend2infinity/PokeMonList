import React from 'react'

export default function PokeList({ pokemon }) {
    return (
        <div>
            {pokemon.map(y => (
                <div key = {y}> {y} </div> 
            ))}
        </div>
    )
}
