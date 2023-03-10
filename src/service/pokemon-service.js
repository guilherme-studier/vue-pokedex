import axios from 'axios';

// const URL = 'https://pokeapi.co/api/v2';

const getPokemonList = async (limit = 9) =>{
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`) //passar esse ? o q é?
    return resp.data
}

const getPokemon =  async id =>{
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return resp.data
}

const getPokemonImageURL = id =>{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

}
export { getPokemonList, getPokemon, getPokemonImageURL }