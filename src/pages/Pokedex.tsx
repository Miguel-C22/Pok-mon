import Pokemon from "@/components/PokemonDex/Pokemon"
import { Box, Button } from "@mui/material"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, fetchPokemon, PokemonData, RootState } from '@/store';
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';


function Pokedex() {
    const [displayData, setDisplayData] = useState<PokemonData[]>([])
    const dispatch = useDispatch<AppDispatch>();
    const { data, isLoading, error } = useSelector((state: RootState) => state.pokemon);

    const fetchPokemonData = () => {
        dispatch(fetchPokemon(15)); 
        setDisplayData(data)
    }
  
    useEffect(() => {
      fetchPokemonData(); 
    }, []);

  return (
    <Box>
        {!isLoading ?
            <> 
                {!error ? 
                  <Box sx={{paddingBottom: "1em"}}>
                    <Pokemon pokemonData={displayData}/> 
                    <Button 
                      style={{display: "flex", gap: "1em", alignContent: "center", margin: "auto"}} 
                      variant="contained" 
                      onClick={fetchPokemonData}
                    > 
                      <CatchingPokemonTwoToneIcon/> 
                      Rest Pokemon
                    </Button>
                  </Box>
                  : 
                  <Error />
                } 
            </>
            :
            <Loader />
        }
    </Box>
  )
}

export default Pokedex