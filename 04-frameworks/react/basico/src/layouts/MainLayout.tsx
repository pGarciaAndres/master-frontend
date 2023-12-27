import React, { PropsWithChildren, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { RickMortyIconOff, RickMortyIconOn } from '@/assets/icons'
import {
  ListContext,
  LayoutContext,
  LayoutContextProvider,
} from '@/core/context'
import { FIRST_RICK_SEARCH, FIRST_SEARCH } from '@/core/context/constants'
import { routes } from '@/core'
import * as classes from '@/layouts/Layout.styles'

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { rickMortyPage, setRickMortyPage } = useContext(LayoutContext)
  const { setSearch } = useContext(ListContext)
  const navigate = useNavigate()

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const title = rickMortyPage ? 'Rick & Morty Members' : `Company Members`

  const handleClick = () => {
    const nextSearch = rickMortyPage ? FIRST_SEARCH : FIRST_RICK_SEARCH
    setSearch(nextSearch)
    setRickMortyPage(!rickMortyPage)
    navigate(rickMortyPage ? routes.home : routes.rickMorty)
  }

  return (
    <LayoutContextProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className={rickMortyPage ? classes.specialLayout : classes.layout}>
          <div className={classes.header}>
            <h2>{title}</h2>
            <div className={classes.clickable} onClick={handleClick}>
              {rickMortyPage ? <RickMortyIconOn /> : <RickMortyIconOff />}
            </div>
          </div>
          {children}
        </div>
      </ThemeProvider>
    </LayoutContextProvider>
  )
}
