function PokemonCard() {
    const pokemonList = [
      {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "mew",
      },
    ];

    const pokemon = pokemonList.map((pokemon, index) => (
      pokemon.imgSrc ? 
      <figure key={index}> 
        <img src={pokemon.imgSrc} alt={pokemon.name}/>
        <figcaption>{pokemon.name}</figcaption>
      </figure> 
      : 
      <figure key={index}>
        <p>{pokemon.imgSrc = '???'}</p>
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    ));

    return pokemon;
}
export default PokemonCard;