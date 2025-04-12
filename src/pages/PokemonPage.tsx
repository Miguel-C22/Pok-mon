import Pokemon from "@/components/PokemonPage/Pokemon"
import { Box } from "@mui/material"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, fetchPokemon, RootState } from '@/store';
import Error from "@/components/Error";
import Loader from "@/components/Loader";

function PokemonPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { data, isLoading, error } = useSelector((state: RootState) => state.pokemon);
  
    useEffect(() => {
      dispatch(fetchPokemon()); 
    }, []);

  return (
    <Box>
        {!isLoading ?
            <> 
                {!error ? <Pokemon pokemonData={data}/> : <Error />} 
            </>
            :
            <Loader />
        }
    </Box>
  )
}

export default PokemonPage