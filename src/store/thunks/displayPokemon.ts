import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export interface PokemonData {
    name: string;
    abilities: string[];
    types: string[];
    moves: string[];
    regularImg: string;
    shinyImg: string;
    displayName: string;
    weight: number;
    species: string;
    stats: { name: string; baseStat: number }[];
    description: string;
    displayInfo: boolean;
  }

const fetchPokemon = createAsyncThunk('pokemon/fetch', async () => {
    const TOTAL_POKEMON = 1010
    const LIMIT = 10

    function getRandomOffset() {
    return Math.floor(Math.random() * (TOTAL_POKEMON - LIMIT))
    }

    const offset = getRandomOffset()

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
    const pokemonNames = response.data.results.map((pokemon: { name: string }) => pokemon.name);

    const pokemonData = await Promise.all(
        pokemonNames.map(async (pokemonName: string) => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            const data = res.data;

            const speciesRes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`);
            const speciesData: any = speciesRes.data;

            const englishDescription = speciesData.flavor_text_entries.find(
                (entry: any) => entry.language.name === 'en'
            )?.flavor_text || 'No description available';

            return {
                name: data.name,
                abilities: data.abilities.map((ability: {ability: { name: string }}) => ability.ability.name),
                types: data.types.map((type: { type: { name: string } }) => type.type.name),
                moves: data.moves.map((move: {move: { name: string }}) => move.move.name),
                regularImg: data.sprites.other.showdown.front_default,
                shinyImg: data.sprites.other.showdown.front_shiny,
                displayName: data.name,
                weight: data.weight,
                species: data.species.name,
                stats: data.stats.map((stat: any) => ({
                    name: stat.stat.name,
                    baseStat: stat.base_stat,
                })),
                description: englishDescription,
                displayInfo: true,
            };
        })
    );

    return pokemonData; 
});

export { fetchPokemon };