import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterComponent, queryClient } from '@/core'
import { LayoutContextProvider, ListContextProvider } from '@/core/context'

export const App = () => {
  return (
    <LayoutContextProvider>
      <QueryClientProvider client={queryClient}>
        <ListContextProvider>
          <RouterComponent />
        </ListContextProvider>
      </QueryClientProvider>
    </LayoutContextProvider>
  )
}
