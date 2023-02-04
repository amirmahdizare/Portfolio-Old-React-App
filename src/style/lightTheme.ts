import { createTheme, responsiveFontSizes } from "@mui/material";

export const lightTheme = responsiveFontSizes(createTheme({
    typography: {
        fontFamily: 'Montserrat'
    }
}))