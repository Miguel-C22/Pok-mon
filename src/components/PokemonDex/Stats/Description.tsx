import { Box, styled, Typography } from '@mui/material';

interface DescriptionProps {
  description: string | any;
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
  borderBottom: '2px solid #003049',
  color: '#003049',
});

const DescriptionText = styled(Typography)({
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#2d3142',
    padding: '0.25em 0',
    maxHeight: '200px',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#ccc transparent',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#ccc',
      borderRadius: '6px',
    },
});

function Description({ description }: DescriptionProps) {
  return (
    <Wrapper>
      <Label>Description</Label>
      <DescriptionText>{description}</DescriptionText>
    </Wrapper>
  );
}

export default Description;