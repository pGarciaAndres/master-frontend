import React from 'react'
import { MainLayout } from '@/layouts'
import { ErrorMessage } from '@/pods/error/ErrorMessage'

export const Error: React.FC = () => {
  return (
    <MainLayout>
      <ErrorMessage />
    </MainLayout>
  )
}
