import { typeColors } from '@/utils/typeColors';
import { Box, styled, Typography } from '@mui/material';

interface TypesProps {
  types: string;
}

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
    width: "100%",
});

const Label = styled(Typography)({
    fontSize: '0.875rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: "solid black 2px",
});

const TypesContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75em',
  flexWrap: 'wrap',
});

const TypeBox = styled(Typography)<{ typeName: string }>(({ typeName }) => ({
  padding: '0.4em 0.9em',
  borderRadius: '999px',
  color: '#fff',
  backgroundColor: typeColors[typeName] || 'gray',
  textTransform: 'capitalize',
  fontWeight: 600,
  fontSize: '0.875rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
}));

function Types({ types }: TypesProps) {
  return (
    <Container>
      <Label>Types</Label>
      <TypesContainer>
        <TypeBox typeName={types}>{types}</TypeBox>
      </TypesContainer>
    </Container>
  );
}

export default Types;