import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Detail, Home, RickMorty, Error } from '@/pages'
import { switchRoutes } from '@/core'

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.home} element={<Home />} />
        <Route path={switchRoutes.detail} element={<Detail />} />
        <Route path={switchRoutes.rickMorty} element={<RickMorty />} />
        <Route path={switchRoutes.rickMortyDetail} element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}
