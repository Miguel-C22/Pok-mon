import { Box, styled } from "@mui/material"
import { Link } from "react-router-dom"

const Container = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1em",
})
const LinkStyle = styled(Link)({
    display: "flex", 
    alignItems: "center",
    color: "white",
    textDecoration: "none",
    fontSize: "2em",
    cursor: "pointer",
    textAlign:"center",
    borderBottom: "2px solid transparent",

    '&:hover': {
        borderBottom: "2px solid Red",
        color: 'yellow',
        boxShadow: 'none',
    },
})

function Header() {
  return (
    <Container>
        <LinkStyle to="/">
            <img 
                src="/images/pokeBall.webp" 
                alt="" 
                style={{
                    width: 30,
                    height: '100%',
                }}
            />
        </LinkStyle>
        <LinkStyle to="/pokemon">Pokemon</LinkStyle>
        <LinkStyle to="/pokemonCards">Pokemon Cards</LinkStyle>
    </Container>
  )
}

export default Header