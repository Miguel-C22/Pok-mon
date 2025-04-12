import { Box, Button, styled } from '@mui/material';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import CircleIcon from '@mui/icons-material/Circle';

const ControlPadContainer = styled(Box)({
    display: 'flex',
    gap: '3em',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2em 0 1em 0',
});
  
const ArrowGrid = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30px)',
    gridTemplateRows: 'repeat(3, 30px)',
    gap: '0',
    alignItems: 'center',
    justifyItems: 'center',
});
  
const ArrowButton = styled(Button)({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: "black",
    padding: 0,
    '&:hover': {
      transform: 'scale(1.1)',
    },
});
  
const ActionButtons = styled(Box)({
    display: 'flex',
    flexWrap: "wrap",
    gap: '1em',
});
  
const CircleButton = styled(Button)({
    background: 'linear-gradient(145deg, #2e2e2e, #121212)', 
    border: 'none',
    borderRadius: '50%',
    width: '60px', 
    height: '60px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease', 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)', 
    '&:hover': {
      transform: 'scale(1.1)',
      background: 'linear-gradient(145deg, #444444, #1c1c1c)', 
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.6)',
    },
    '&:active': {
      transform: 'scale(1)', 
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)', 
    },
    '&:focus': {
      outline: 'none', 
    }
});

interface PokemonPadControlsProps {
    onNextPokemon: () => void;
    onBackPokemon: () => void;
    onNextStat: () => void;
    onBackStat: () => void;
}

function PokemonPadControls({
    onNextPokemon,
    onBackPokemon,
    onNextStat,
    onBackStat,
  }: PokemonPadControlsProps) {
  return (
    <ControlPadContainer>
        <ActionButtons>
            <CircleButton><CircleIcon style={{ fontSize: 30, color: "red" }} /></CircleButton>
            <CircleButton><CircleIcon style={{ fontSize: 30, color: "blue" }} /></CircleButton>
        </ActionButtons>
        <ArrowGrid>
            <div />
            <ArrowButton onClick={onNextStat}><ArrowCircleUpTwoToneIcon fontSize="large" /></ArrowButton>
            <div />
            
            <ArrowButton onClick={ onBackPokemon}><ArrowCircleLeftTwoToneIcon fontSize="large" /></ArrowButton>
            <div />
            <ArrowButton onClick={onNextPokemon}><ArrowCircleRightTwoToneIcon fontSize="large" /></ArrowButton>

            <div />
            <ArrowButton onClick={ onBackStat}><ArrowCircleDownTwoToneIcon fontSize="large" /></ArrowButton>
            <div />
        </ArrowGrid>
    </ControlPadContainer> 
  )
}

export default PokemonPadControls