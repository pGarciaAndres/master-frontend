import React from 'react'
import { LayoutContextModel } from '@/core/context/layout/model'

export const LayoutContext = React.createContext<LayoutContextModel>({
  rickMortyPage: false,
  setRickMortyPage: () => {},
})
