import React from 'react'
import { getDefaultDetails, mapToDetail, getMemberDetail } from '@/pods/details'

export const useDetails = (login: string, rickMortyPage: boolean) => {
  const [member, setMember] = React.useState(getDefaultDetails())

  React.useEffect(() => {
    getMemberDetail(login, rickMortyPage).then((result) => {
      setMember(mapToDetail(result))
    })
  }, [])

  return { member }
}
