import { Box, styled, Typography } from '@mui/material';

interface WeightProps {
  weight: string | any;
}

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
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

const ValueBox = styled(Typography)({
  padding: '0.4em 0.9em',
  borderRadius: '999px',
  backgroundColor: '#d0f0c0',
  color: '#1b4332',
  fontWeight: 700,
  fontSize: '0.9rem',
  width: 'fit-content',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
});

function Weight({ weight }: WeightProps) {
  return (
    <Wrapper>
      <Label>Weight</Label>
      <ValueBox>{weight} lbs</ValueBox>
    </Wrapper>
  );
}

export default Weight;