import React from 'react'
import { ErrorMessage, useSearch, MembersTable, loading } from '@/pods'

export const List: React.FC = () => {
  const { isLoading, isError, members } = useSearch()

  if (isError) {
    return <ErrorMessage />
  }

  if (isLoading) {
    return <p>{loading}</p>
  }

  return <MembersTable members={members} />
}
