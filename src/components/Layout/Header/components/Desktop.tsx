import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import lightLogo from 'assets/logos/yellow.png'
import { Call, Download, GitHub, LinkedIn } from '@mui/icons-material'
import { Link } from 'components'

export const Desktop = () => {

    const menuItems = [
        { name: 'Projects', url: '#' },
        { name: 'Work Experince', url: '#' },
        { name: 'Skills', url: '#' },
    ]
    return (
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'space-between', p: 2 }}>
            <Box sx={{ '& img': { width: '50px', height: '45px', mr: 1 }, display: 'flex', alignItems: "center", flex: 0.5 }}>
                <img src={lightLogo} />
                <Typography fontWeight={'500'} color={'yellow.main'} fontSize={18}>Amir Mahdi Keshan Zare </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', flex: 0.4, alignItems: 'center' }}>
                {menuItems.map(item => <Link text={item.name} href={item.url} />)}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'flex-end', alignItems: 'center', flex: 0.5 }}>

                {/* <IconButton>
                    <LinkedIn color='primary' />
                </IconButton>

                <IconButton sx={{ color: '#fff' }}>
                    <GitHub />
                </IconButton> */}

                {/* <Button variant='outlined' color='info' startIcon={<Download />} disabled>
                    <Typography fontWeight='bold'>Download</Typography>
                </Button> */}

                <Button variant='contained' color='yellow' startIcon={<Call />} sx={{ ml: 2 }}>
                    <Typography fontWeight='bold'>Contact</Typography>
                </Button>

            </Box>
        </Box>
    )
}
