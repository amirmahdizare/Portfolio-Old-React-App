import { Container } from '@mui/material'
import React, { ReactNode } from 'react'
import { Header } from './Header/Header'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Container maxWidth='xl' >
            <Header />
            {children}
        </Container>
    )
}
