import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

function Loader() {
  return (
    <Box>
        <img 
            src="/images/pikachuWalking.gif" 
            alt="" 
            style={{
                width: '100%',
                height: '100%',
            }}
        />
        <LinearProgress color="inherit" />
    </Box>
  )
}

export default Loader