import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { mapToMembers, getMembers } from '@/pods/search'
import { LayoutContext, ListContext } from '@/core/context'

export const useSearch = (nextPage?: number) => {
  const { search, currentPage, perPage } = React.useContext(ListContext)
  const { rickMortyPage } = React.useContext(LayoutContext)
  const page = nextPage || currentPage

  const searchMembers = async (
    search: string,
    page: number,
    perPage: number,
    rickMortyPage: boolean
  ) => {
    debugger
    const members = await getMembers(search, page, perPage, rickMortyPage)
    return mapToMembers(members)
  }

  const {
    data: members = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['members', search, page, perPage, rickMortyPage],
    queryFn: () => searchMembers(search, page, perPage, rickMortyPage),
    enabled: !!search,
  })

  return { members, isLoading, isError, refetch }
}
