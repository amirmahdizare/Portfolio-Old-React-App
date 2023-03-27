import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export const HeroSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", justifyContent: 'center' }}>
            <Box sx={{ background: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%",boxSizing:'border-box', justifyContent: 'center', p: 3 }}>

                <Typography fontSize={24} color={'white'} gutterBottom>Are you looking for a experinced front end developer ?</Typography>
                <Typography fontSize={24} color={'white'} gutterBottom>Do you need front end applications to achieve your business goals?</Typography>
                <Typography fontSize={28} color={'success.light'}>So you are in a right Place</Typography>

                <Typography fontSize={40} color={'yellow.main'}>I am Here To Develop!</Typography>
            </Box>
        </Box>
    )
}
