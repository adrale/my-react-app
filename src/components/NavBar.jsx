

function NavBar(props) {
    const handleClickNext = () => {
        props.setPokemonIndex(props.pokemonIndex +1)
      }
    
      const handleClickPrev = () => {
        props.setPokemonIndex(props.pokemonIndex -1)
      }
    return(
        <>
            {props.pokemonIndex > 0 && <button onClick={handleClickPrev}>Précédent</button>} 
            {props.pokemonIndex < props.pokemonList.length -1 && <button onClick={handleClickNext}>Suivant</button>}
        </>
    )
}

export default NavBar