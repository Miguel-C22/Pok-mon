import { Box, styled, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { PokemonData } from '@/store';
import { useState } from 'react';
import Stats from './Stats/Stats';
import Types from './Stats/Types';
import Moves from './Stats/Moves';
import Abilities from './Stats/Abilities';
import Description from './Stats/Description';
import Weight from './Stats/Weight';
import PokemonPadControls from './PokemonPadControls';

const Container = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5em",
    flexWrap: "wrap",
    marginTop: "5em"
})
const PokemonStyle = styled(Box)({
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.5)",
    borderRadius: ".5em",
    padding: "1em 2em 1em 2em",
    gap: "0em",
    backgroundColor: "darkred",
})
const ImageContainer = styled(Box)({
    background: 'linear-gradient(145deg, #d0d0d0, #f8f8f8)',
    border: '3px solid #333',
    borderRadius: '16px',
    padding: '1em',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2), 4px 4px 12px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    position: 'relative',
    width: '300px',
    height: '200px',
    overflow: 'hidden',
    backgroundImage: 'url("/images/backGroundImage.webp")' ,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });

const ContentContainer = styled(Box)({
    background: 'linear-gradient(145deg, #e4e4e4, #ffffff)',
    border: '3px solid #333',
    borderRadius: '16px',
    padding: '1em',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2), 4px 4px 12px rgba(0,0,0,0.3)',
    display: 'flex',
    position: 'relative',
    width: '300px',
    height: '200px',
  });

  const PokemonInfoContainer = styled(Box)({
    display: "flex", 
    flexDirection: "column",
    gap: ".5em"
  })
  const PokemonName = styled(Typography)({
    position: 'absolute',
    top: '2px',
    left: '50%',
    transform: 'translateX(-50%)', 
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'capitalize',
    color: '#fff',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
    letterSpacing: '0.05em',
    zIndex: 1, 
  });

interface PokemonProps {
    pokemonData: PokemonData[]
}

function Pokemon({pokemonData} : PokemonProps) {
    const [pokemonDisplay, setPokemonDisplay] = useState<number>(0)
    const [displayStat, setDisplayStat] = useState<number>(0)
    const stats = ["description", "weight","types", "stats", "moves","abilities"]
    const currentKey = stats[displayStat];

    const onNextPokemon = () => {
      setPokemonDisplay((prevIndex) => (prevIndex + 1) % pokemonData.length);
    };
    
    const onBackPokemon = () => {
      setPokemonDisplay((prevIndex) => (prevIndex - 1 + pokemonData.length) % pokemonData.length);
    };
    
    const onNextStat = () => {
      setDisplayStat((prevIndex) => (prevIndex + 1) % stats.length);
    };
    
    const onBackStat = () => {
      setDisplayStat((prevIndex) => (prevIndex - 1 + stats.length) % stats.length);
    };

  const customStylesForStates = () => {
    const data = pokemonData[pokemonDisplay];
    const value = data[currentKey as keyof typeof data];
      
    if (Array.isArray(value)) {
      switch (currentKey) {
        case "stats":
          return <Stats stats={value}/>; 
        case "types":
          return <Types types={value.join(", ")}></Types>;
        case "moves":
          return <Moves moves={value.slice(0, 5).join(", ")} />;
        case "abilities":
          return <Abilities abilities={value.join(", ")} />;
        default:
          return null;
      }} else {
      switch (currentKey) {
        case "weight":
          return <Weight weight={value} />;
        case "description":
          return <Description description={value} />;
        default:
          return null;
      }
    }
  };

  return (
    <Container>
        <PokemonStyle key={uuidv4()}>
            {pokemonData.map((data, index) => (
                <Box key={uuidv4()} style={{ display: index === pokemonDisplay ? "block" : "none" }}>
                    <PokemonInfoContainer>
                        <ImageContainer>
                            <img src={data.regularImg}/>
                            <PokemonName key={uuidv4()}>
                              {data.name}
                            </PokemonName>
                        </ImageContainer>
                        <ContentContainer>
                            {customStylesForStates()}
                        </ContentContainer>
                    </PokemonInfoContainer>
                </Box>
            ))}
            <PokemonPadControls
              onNextPokemon={onNextPokemon}
              onBackPokemon={onBackPokemon}
              onNextStat={onNextStat}
              onBackStat={onBackStat} 
            />
        </PokemonStyle>
    </Container>
  )
}

export default Pokemon