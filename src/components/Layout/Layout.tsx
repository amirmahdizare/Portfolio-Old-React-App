import React, { ReactNode } from 'react'
import { Box } from '@mui/system'
import { Header } from './Header/Header'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <Box mt={{ xs: 8, lg: 4 }}></Box>
            {children}
        </>
    )
}
