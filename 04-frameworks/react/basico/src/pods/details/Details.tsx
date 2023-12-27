import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { LayoutContext } from '@/core/context'
import { routes } from '@/core'
import { GithubIcon, useDetails } from '@/pods'
import { DetailProps } from '@/pods/details/Details.model'
import notFound from '@/assets/notFound.jpg'

export const Details: React.FC<DetailProps> = (props: DetailProps) => {
  const { login } = props
  const { rickMortyPage } = React.useContext(LayoutContext)
  const { member } = useDetails(login, rickMortyPage)

  if (!member) {
    return <div>not available</div>
  }

  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        component='img'
        alt={member.name}
        height='250'
        image={member.avatarUrl ?? notFound}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {member.name}
        </Typography>
        <Typography color='text.secondary'>
          <small>{member.text1}</small>
        </Typography>
        <Typography color='text.secondary' variant='h6'>
          {member.text2}
        </Typography>
        <Typography color='text.secondary' variant='h6'>
          {member.text3 ? `From: ${member.text3}` : null}
        </Typography>
        <Typography color='text.secondary' variant='h6'>
          {member.text4}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Link to={!rickMortyPage ? routes.home : routes.rickMorty}>
          <Button sx={{ color: 'white' }}>Back</Button>
        </Link>
        {member.htmlUrl && (
          <Link to={member.htmlUrl} target='_blank'>
            <Button>
              <GithubIcon />
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  )
}
