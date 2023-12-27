import React from 'react'
import { Search } from '@/pods/search/Search'
import { List } from '@/pods/list/List'
import { MainLayout } from '@/layouts'

export const Home: React.FC = () => {
  return (
    <MainLayout>
      <Search />
      <List />
    </MainLayout>
  )
}
