import React from 'react'
import { DetailLayout } from '@/layouts'
import { Details } from '@/pods/details/Details'
import { useParams } from 'react-router-dom'

export const Detail: React.FC = () => {
  const { login } = useParams()

  return (
    <DetailLayout>
      <Details login={login} />
    </DetailLayout>
  )
}
