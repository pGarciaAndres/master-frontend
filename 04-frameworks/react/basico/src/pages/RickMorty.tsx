import React from 'react'
import { MainLayout } from '@/layouts'
import { Search } from '@/pods/search/Search'
import { List } from '@/pods/list/List'

export const RickMorty: React.FC = () => {
  return (
    <MainLayout>
      <Search />
      <List />
    </MainLayout>
  )
}
