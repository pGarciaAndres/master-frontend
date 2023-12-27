import React, { PropsWithChildren } from 'react'
import { ListContext, LayoutContext } from '@/core/context'
import { FIRST_PAGE, ITEMS_PER_PAGE } from '@/core/context/constants'
import { getInitialSearch } from '@/core/context/utils'

export const ListContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { rickMortyPage } = React.useContext(LayoutContext)
  const [search, setSearch] = React.useState(getInitialSearch())
  const [currentPage, setCurrentPage] = React.useState(FIRST_PAGE)
  const [perPage, setPerPage] = React.useState(ITEMS_PER_PAGE)

  const resetPagination = () => {
    setCurrentPage(FIRST_PAGE)
    setPerPage(ITEMS_PER_PAGE)
  }

  React.useEffect(() => {
    resetPagination()
  }, [rickMortyPage])

  return (
    <ListContext.Provider
      value={{
        search,
        currentPage,
        perPage,
        setSearch,
        setCurrentPage,
        setPerPage,
      }}
    >
      {children}
    </ListContext.Provider>
  )
}
