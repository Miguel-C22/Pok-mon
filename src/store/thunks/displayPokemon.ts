import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Pokemon {
    name: string,
    regularImg: string,
    shinyImg: string,
    displayName: number,
    species: string,
    weight: number,
    description: string,
    displayInfo: boolean, 
}
interface PokemonAbilities {
    ability: { name: string };
}
interface PokemonType {
    type: { name: string };
}
interface PokemonMove {
    move: { name: string };
}
interface PokemonStat {
    stat: { name: string }, 
    base_stat: number
}
interface PokemonDescription {
    flavor_text_entries: {
        flavor_text: string;
        language: { name: string };
    }[];
}

export type PokemonData = Pokemon & {
    abilities: PokemonAbilities[];
    types: PokemonType[];
    moves: PokemonMove[];
    stats: PokemonStat[];
    flavorText: string;
};

const fetchPokemon = createAsyncThunk('pokemon/fetch', async () => {

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10');
    const pokemonNames = response.data.results.map((pokemon: { name: string }) => pokemon.name);

    const pokemonData = await Promise.all(
        pokemonNames.map(async (pokemonName: string) => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            const data = res.data;

            const speciesRes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`);
            const speciesData: PokemonDescription = speciesRes.data;

            const englishDescription = speciesData.flavor_text_entries.find(
                (entry) => entry.language.name === 'en'
            )?.flavor_text || 'No description available';

            return {
                name: data.name,
                abilities: data.abilities.map((ability: PokemonAbilities) => ability.ability.name),
                types: data.types.map((type: PokemonType) => type.type.name),
                moves: data.moves.map((move: PokemonMove) => move.move.name),
                regularImg: data.sprites.other.showdown.front_default,
                shinyImg: data.sprites.other.showdown.front_shiny,
                displayName: data.name,
                weight: data.weight,
                species: data.species.name,
                stats: data.stats.map((stat: PokemonStat) => ({
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