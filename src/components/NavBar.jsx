function NavBar({pokemonList, setPokemonIndex}) {
    const handleClick = (index, pokemon) => {
      setPokemonIndex(index)
      if(pokemon.name === "pikachu") {
        alert("pika pikachu !!!")
      }
    }

    return(
        <>
        {pokemonList.map((pokemon, index) => (
          <button 
          type="Button"
          key={pokemon.name}
          onClick={() => {handleClick (index, pokemon)}}
          >
            {pokemon.name}
          </button>
        ))}
        </>
    )
}

export default NavBar