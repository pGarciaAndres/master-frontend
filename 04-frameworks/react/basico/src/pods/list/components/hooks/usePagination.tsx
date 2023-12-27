import React from 'react'
import { SelectChangeEvent } from '@mui/material'
import { ListContext } from '@/core/context'
import { useSearch } from '@/pods/search'
import { FIRST_PAGE, ITEMS_PER_PAGE } from '@/core/context/constants'

export const usePagination = () => {
  const { setCurrentPage, setPerPage } = React.useContext(ListContext)
  const { currentPage } = React.useContext(ListContext)

  const handleChangePage = (newPage: number) => setCurrentPage(newPage)

  const handleChangePerPage = (event: SelectChangeEvent<number>) => {
    setPerPage(event.target.value as number)
    setCurrentPage(FIRST_PAGE)
  }

  const hasNextPage = () => {
    const { members } = useSearch(currentPage + 1)
    return members.length > 0
  }

  const resetPagination = () => {
    setCurrentPage(FIRST_PAGE)
    setPerPage(ITEMS_PER_PAGE)
  }

  return {
    handleChangePage,
    handleChangePerPage,
    hasNextPage,
    resetPagination,
  }
}
