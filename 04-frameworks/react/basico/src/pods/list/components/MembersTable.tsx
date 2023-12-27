import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import PersonIcon from '@mui/icons-material/PersonSearch'
import { Link } from 'react-router-dom'
import { routes } from '@/core'
import { LayoutContext } from '@/core/context'
import { Pagination } from '@/pods'
import { Member } from '@/pods/search/Search.model'
import { headerList, padding } from '@/pods/list/constants'

interface Props {
  members: Member[]
}

export const MembersTable: React.FC<Props> = (props) => {
  const { rickMortyPage } = React.useContext(LayoutContext)
  const { members } = props

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '95%',
        maxWidth: 800,
        p: '0 0.5em',
        opacity: 0.8,
        marginBottom: 2,
      }}
    >
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            {headerList.map((header) => (
              <TableCell
                key={header}
                align='right'
                sx={{ '&:first-of-type': { textAlign: 'left' } }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member: Member) => (
            <TableRow
              key={member.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row' sx={{ padding }}>
                <Avatar alt={member.name} src={member.avatarUrl} />
              </TableCell>
              <TableCell align='right' sx={{ padding }}>
                {member.id}
              </TableCell>
              <TableCell align='right' sx={{ padding }}>
                {member.name}
              </TableCell>
              <TableCell align='right' sx={{ padding }}>
                <Link to={routes.detail(member.login, rickMortyPage)}>
                  <IconButton>
                    <PersonIcon />
                  </IconButton>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination members={members} />
    </TableContainer>
  )
}
