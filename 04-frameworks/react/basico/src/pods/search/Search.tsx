import React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { ListContext } from '@/core/context'
import { useSearch, useDebounce } from '@/pods/search/hooks'
import { usePagination } from '@/pods/list'

export const Search: React.FC = () => {
  const { search, setSearch } = React.useContext(ListContext)
  const [input, setInput] = React.useState<string>(search)
  const { refetch } = useSearch()
  const { resetPagination } = usePagination()
  const debouncedInput = useDebounce(input, 500)

  React.useEffect(() => {
    if (debouncedInput === '') return
    setSearch(debouncedInput)
    resetPagination()
  }, [debouncedInput])

  const handleSearch = () => {
    if (!input) return
    refetch()
    resetPagination()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      refetch()
      resetPagination()
    }
  }

  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        display: 'flex',
        width: '95%',
        maxWidth: 400,
        marginBottom: 4,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Type to search...'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={handleKeyDown}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
