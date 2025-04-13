import { TypeBox } from '@/styles/globalStyles';
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
  borderRadius: 4,
});

function Types({ types }: TypesProps) {
  return (
    <Container>
      <Label>Types</Label>
      <TypesContainer>
        {types.split(',').map((type) => (
          <TypeBox typeName={type}>{type}</TypeBox>
        ))}
      </TypesContainer>
    </Container>
  );
}

export default Types;