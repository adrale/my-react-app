function NavBar({pokemonList, setPokemonIndex }) {
    const handleClick = (index) => {
      setPokemonIndex(index)
    }

    return(
        <>
        {pokemonList.map((pokemon, index) => (
          <button 
          type="Button"
          key={pokemon.name}
          onClick={() => {handleClick (index)}}
          >
            {pokemon.name}
          </button>
        ))}
        </>
    )
}

export default NavBar