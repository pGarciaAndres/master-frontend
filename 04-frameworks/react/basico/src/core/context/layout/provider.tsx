import React, { PropsWithChildren } from 'react'
import { LayoutContext } from '@/core/context'
import { isRickMortyPage } from '@/core/context/utils'

export const LayoutContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [rickMortyPage, setRickMortyPage] = React.useState(isRickMortyPage())

  return (
    <LayoutContext.Provider
      value={{
        rickMortyPage,
        setRickMortyPage,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
