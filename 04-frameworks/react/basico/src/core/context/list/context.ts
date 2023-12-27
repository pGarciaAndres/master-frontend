import React from 'react'
import { ListContextModel } from '@/core/context'

export const ListContext = React.createContext<ListContextModel>({
  search: '',
  currentPage: 1,
  perPage: 5,
  setSearch: () => {},
  setCurrentPage: () => {},
  setPerPage: () => {},
})
