import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from '@/store/slices/pokemonSlice';

// This store is the central export point for everything Redux related
export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
});

// These are a must when using Redux with Typescript
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// This syntax means find everything that gets exported from this file and exported from the index.ts file as well
export * from './thunks/displayPokemon'