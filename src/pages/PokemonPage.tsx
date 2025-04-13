import { useEffect, useState } from 'react';
import { Box, Button, Pagination, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, fetchPokemon, PokemonData, RootState } from '@/store';
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import PokemonDisplay from '@/components/PokemonPage/PokemonDisplay';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';

const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "2em",
    padding: "1em",
    alignItems: "center",
})

const BottomContainer = styled(Box)({
    display: "flex",
    gap: "2em",
    padding: "1em",
    alignItems: "center",
})

function PokemonPage() {
    const [page, setPage] = useState(1);
    const [displayData, setDisplayData] = useState<PokemonData[]>([])
    const dispatch = useDispatch<AppDispatch>();
    const { data, isLoading, error } = useSelector((state: RootState) => state.pokemon);
    const ITEMS_PER_PAGE = 9;

    const fetchPokemonData = () => {
        dispatch(fetchPokemon(50)); 
    }

    useEffect(() => {
        fetchPokemonData();
      }, []);
      
      useEffect(() => {
        const startIndex = (page - 1) * ITEMS_PER_PAGE;
        const endIndex = page * ITEMS_PER_PAGE;
        setDisplayData(data.slice(startIndex, endIndex));
      }, [data, page]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };

  return (
    <Container>
        {!isLoading ?
            <> 
                {!error ? <PokemonDisplay pokemonData={displayData}/> : <Error />} 
            </>
            :
            <Loader />
        }
        <BottomContainer>
            <Pagination count={Math.ceil(data.length / ITEMS_PER_PAGE)} page={page} onChange={handleChange} />
            <Button 
                style={{display: "flex", gap: "1em", alignContent: "center"}} 
                variant="contained" 
                onClick={fetchPokemonData}
            > 
                <CatchingPokemonTwoToneIcon/> 
                Rest Pokemon
            </Button>
        </BottomContainer>
    </Container>
  )
}

export default PokemonPage