import Links from "@/components/HomePage/Links"
import { Box, styled } from "@mui/material"

const Container = styled(Box)({
    display: "flex",
    flexDirection: "column", 
    gap: "3em",
    marginTop: "2em",
})

const PikachuContainer = styled(Box)({
    position: "absolute",
    bottom: 0,
    left: "-200px",
    width: "200px",
    height: "auto",
    animation: "walk-across 5s linear infinite",
    zIndex: 10,
  
    '@keyframes walk-across': {
      '0%': {
        left: '-200px',
      },
      '100%': {
        left: '100%',
      },
    },
  });

function HomePage() {
  return (
    <Container>
        <img 
            src="/images/pokemonLogo.png" 
            alt="Pokemon"
            style={{
                width: '50%',
                height: '100%',
                objectFit: 'contain',
                margin: "0 auto"
            }}
            />
            <Links />
            <PikachuContainer>
                <img 
                    src="/images/pikachu.gif" 
                    alt="Pokemon"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </PikachuContainer>
    </Container>
  )
}

export default HomePage