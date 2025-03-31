import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, fetchPokemon, RootState } from './store'

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon()); // Dispatch the thunk to fetch Pokémon
  }, [dispatch]);

  useEffect(() => {
    console.log(data)
  },[isLoading])

  return (
    <>
     App
    </>
  )
}

export default App
