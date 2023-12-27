import React, { PropsWithChildren, useContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { LayoutContext } from '@/core/context'
import * as classes from '@/layouts/Layout.styles'

export const DetailLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { rickMortyPage } = useContext(LayoutContext)

  const title = rickMortyPage ? 'Rick & Morty Member' : 'Organization Member'

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={rickMortyPage ? classes.specialLayout : classes.layout}>
        <div className={classes.header}>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </ThemeProvider>
  )
}
