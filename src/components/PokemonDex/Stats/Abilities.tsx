import { Box, styled, Typography } from '@mui/material';

interface AbilitiesProps {
  abilities: string;
}

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75em',
  width: "100%"
});

const Label = styled(Typography)({
  fontSize: '0.875rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  borderBottom: '2px solid #003049',
  color: '#003049',
});

const AbilitiesContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75em',
  flexWrap: 'wrap',
});

const AbilityBox = styled(Typography)({
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

  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.2)',
  },
});

function Abilities({ abilities }: AbilitiesProps) {
  return (
    <Wrapper>
      <Label>Abilities</Label>
      <AbilitiesContainer>
        <AbilityBox>{abilities}</AbilityBox>
      </AbilitiesContainer>
    </Wrapper>
  );
}

export default Abilities;