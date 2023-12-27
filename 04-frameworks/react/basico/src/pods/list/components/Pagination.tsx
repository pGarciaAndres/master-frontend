import React from 'react'
import { IconButton, MenuItem, Select, Stack, Typography } from '@mui/material'
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'
import { ListContext } from '@/core/context'
import { usePagination } from '@/pods/list/components'
import { Member } from '@/pods/search/Search.model'
import { FIRST_PAGE } from '@/core/context/constants'

interface Props {
  members: Member[]
}

export const Pagination: React.FC<Props> = () => {
  const { currentPage, perPage } = React.useContext(ListContext)
  const { handleChangePage, handleChangePerPage, hasNextPage } = usePagination()

  return (
    <>
      <Stack
        direction='row'
        justifyContent='right'
        alignItems='center'
        spacing={2}
      >
        <Select value={perPage} onChange={handleChangePerPage}>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>

        <IconButton
          aria-label='prev'
          size='large'
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === FIRST_PAGE}
        >
          <ArrowBackIos />
        </IconButton>
        <Typography
          variant='body1'
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {`Page ${currentPage}`}
        </Typography>
        <IconButton
          aria-label='next'
          size='large'
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={!hasNextPage()}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
    </>
  )
}
