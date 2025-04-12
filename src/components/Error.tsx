import { Alert, Box, styled } from '@mui/material'

const Container = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "3em",
})
const ImgContainer = styled(Box)({
    width: '300px', 
    height: '300px', 
    overflow: 'hidden', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

function Error() {
  return (
    <Container>
        <ImgContainer>
            <img 
                src="/images/pikachuError.gif" 
                alt="" 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', 
                    borderRadius: '50%'
                }}
            />
         </ImgContainer>
        <Alert 
            variant="filled" 
            severity="error"
            style={{
                borderRadius: "1em"
            }}
        >
            Failed to fetch Pokemon. <br></br> Refresh page and try again.
        </Alert>
    </Container>
    
  )
}

export default Error