import { Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';

const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: '1em',
    alignItems: "center",
})

const StyledLinks = styled(Link)({
    marginTop: '20px',
    lineHeight: '60px',
    fontWeight: 'bold',
    fontSize: 'large',
    color: 'black',
    background: 'lightblue',
    border: '3px solid #003060',
    borderRadius: '40px',
    boxShadow: '0 5px 20px 3px rgba(0, 0, 0, 0.6)',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    gap: ".5em",
    width: '80%', 

    '&:hover': {
      background: '#003060',
      color: 'white',
      boxShadow: 'none',
    },
  });


function Links() {
  return (
    <Container>
        <StyledLinks to="/pokemon">
            Pokemon 
            <CatchingPokemonTwoToneIcon/>
        </StyledLinks>
        <StyledLinks to="/pokemonCards">
            Pokemon Cards
            <CatchingPokemonTwoToneIcon/>
        </StyledLinks>
    </Container>
  )
}

export default Links