import React from 'react'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import photo from 'assets/images/photo.jpg'
import { HeroSection } from './components/HeroSection/HeroSection'

export const HomePage = () => {
    return (
        <>
        <HeroSection />

{/* 
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                    <Box sx={{ '& img': { width: { lg: '10 0%' }, maxHeight: { xs: 350, lg: 500 }, borderRadius: 3 }, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <img src={photo} />
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: { xs: 'flex-start', md: 'center' }, height: '100%', p: { md: 4 } }}>

                        <Typography align='left' variant='h3' gutterBottom sx={{ width: { xs: '70%', lg: 'unset', lineHeight: '4rem' } }} color='yellow.main'>Hi !I am Amir Mahdi Keshan Zare</Typography>

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
                </Grid>
            </Grid> */}
        </>
    )
}
