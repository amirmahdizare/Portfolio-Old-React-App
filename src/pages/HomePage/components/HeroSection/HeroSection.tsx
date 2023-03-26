import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import photo from 'assets/images/photo.jpg'

export const HeroSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", justifyContent: 'center' }}>
            <Box sx={{ background: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', width: "100%", justifyContent: 'center', p: 3, borderRadius: 1 }}>

                <Typography fontSize={24} color={'white'} gutterBottom>Are you looking for a experinced front end developer ?</Typography>
                <Typography fontSize={24} color={'white'} gutterBottom>Do you need front end applications to achieve your business goals?</Typography>
                <Typography fontSize={32} color={'success.light'}>So you are in a right Place</Typography>

                <Typography fontSize={64} color={'yellow.main'}>I am Here To Develop!</Typography>
            </Box>
            <Box sx={{ '& img': { borderRadius: '50%', width: '250px', height: '250px', borderColor: 'yellow.main', borderWidth: '2px', borderStyle: 'solid' }, my: 2, display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', p: 3 }}>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography color={'yellow.main'} fontSize={48} display={'inline'} sx={{verticalAlign:'middle'}}>Amir Mahdi Keshan Zare <Typography color={'grey.200'} display={'inline'} fontSize={20}>(Known as AMKZ)</Typography></Typography>
                    <Typography color={'grey.300'} fontSize={36}>Front End Developer</Typography>
                </Box>
                <img src={photo} />
            </Box>

        </Box>
    )
}
