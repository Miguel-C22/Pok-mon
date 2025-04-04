import { AppDispatch, fetchPokemon, RootState } from '@/store';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function PokemonPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { data, isLoading, error } = useSelector((state: RootState) => state.pokemon);
  
    useEffect(() => {
      dispatch(fetchPokemon()); // Dispatch the thunk to fetch Pokémon
    }, [dispatch]);
  
    useEffect(() => {
      console.log(data)
    },[isLoading])
    
  return (
    <div>PokemonPage</div>
  )
}

export default PokemonPage