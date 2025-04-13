import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemon, PokemonData } from '@/store/thunks/displayPokemon'
import { SerializedError } from '@reduxjs/toolkit';

interface PokemonState {
    data: PokemonData[];
    isLoading: boolean;
    error: SerializedError | null; 
  }

const initialState: PokemonState = {
    data: [],
    isLoading: false,
    error: null,
  };
  
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
        state.isLoading = true
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action: PayloadAction<PokemonData[]>) => {
        state.isLoading = false
        state.data = action.payload
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
        state.isLoading = false
        state.error = null
    });
  },
});

export const pokemonReducer = pokemonSlice.reducer;