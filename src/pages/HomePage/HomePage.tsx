import React from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const HomePage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100vh', justifyContent: { xs: 'flex-start', md: 'center' }, mt: { xs: 9, lg: 0 } }}>

            <Typography align='left' variant='h3' gutterBottom sx={{ width: { xs: '70%', lg: 'unset', lineHeight: '3rem' } }}>Amir Mahdi Keshan Zare</Typography>

            <Typography align='left' variant='h4' gutterBottom >Front End Developer</Typography>

            <Box
                sx={{
                    '& .MuiButtonBase-root': {
                        mx: 1,
                    }
                    ,
                    display: {
                        xs: "flex", lg: 'block'
                    }
                    ,
                    my: 0.5,
                    boxSizing: 'border-box',
                    width: '100%'
                }}

            >

                <Button color='info' variant='contained' href='https://www.linkedin.com/in/amkzdev/' startIcon={<LinkedIn />} sx={{ my: 1 }} ><Typography>Linkedin</Typography></Button>

                <Button color='error' variant='contained' href='https://github.com/amirmahdizare' startIcon={<GitHub />} sx={{ my: 1 }} ><Typography>GitHub</Typography></Button>

                <Button color='success' variant='contained' href='mailto:amkz.dev@gmail.com' startIcon={<Email />} sx={{ my: 1 }} ><Typography>Email</Typography></Button>

            </Box>

        </Box >
    )
}
