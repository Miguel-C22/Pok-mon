import Header from '@/components/Header'
import { Box, styled } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'

const Container = styled(Box)(({ route }: { route: string }) => ({
    position: "relative",
    overflow: "hidden",
    maxWidth: 1200,
    width: "100%",
    margin: "0 auto",
    minHeight: "100vh",
    backgroundImage: route === "/" ? 'url("/images/backGroundImage.webp")' : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    boxShadow: "20px 0px 10px rgba(0, 0, 0, 0.2), -20px 0px 10px rgba(0, 0, 0, 0.2)",
  }));
const InnerContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
    padding: "0 .5em"
  });
const HeaderContainer = styled(Box)({
    backgroundColor: "#003060",
    width: "100%",
    padding: "2em 1em",
    borderBottom: "2px solid yellow",
  });
  
  function Root() {
    const location = useLocation();
    const currentRoute = location.pathname;

    return (
      <Container route={currentRoute}>
        <InnerContainer>
            {currentRoute !== "/" ? 
            <HeaderContainer>        
                <Header />
            </HeaderContainer>
            : null}
            <Outlet />
        </InnerContainer>
      </Container>
    );
  }

export default Root