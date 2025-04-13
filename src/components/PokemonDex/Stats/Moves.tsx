import { Box, styled, Typography } from '@mui/material';

interface MovesProps {
  moves: string;
}

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75em',
});


const Label = styled(Typography)({
    fontSize: '0.875rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: "solid black 2px"
});

const MovesContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75em',
  flexWrap: 'wrap',
});

const MoveBox = styled(Typography)({
    padding: '0.5em 1.2em',
    borderRadius: '20px',
    background: 'linear-gradient(145deg, #fdf0d5, #fffbe6)',
    color: '#2d3142',
    fontWeight: 700,
    fontSize: '0.85rem',
    textTransform: 'capitalize',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0c3a3',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'default',
});

function Moves({ moves }: MovesProps) {
  return (
    <Wrapper>
      <Label>Moves</Label>
      <MovesContainer>
        <MoveBox>{moves}</MoveBox>
      </MovesContainer>
    </Wrapper>
  );
}

export default Moves;