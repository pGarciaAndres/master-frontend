import { Details } from '@/pods/details/Details.model'
import { DetailsAPI } from '@/pods/details/api/detailsAPI.model'

const capitalize = (text: string) => {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : ''
}

export const mapToDetail = (member: DetailsAPI): Details => ({
  avatarUrl: member.avatar_url ?? member.image,
  name: member.name.split(/(?=[A-Z])/).join(' '),
  text1: member.login ? `@${member.login}` : capitalize(member.species),
  text2: capitalize(member.company ?? member.status),
  text3: capitalize(
    typeof member.location === 'string'
      ? member.location
      : member.location?.name
  ),
  text4: capitalize(member.bio ?? member.origin?.name),
  htmlUrl: member.html_url ?? '',
})

export const getDefaultDetails = (): Details => ({
  avatarUrl: '',
  name: '',
  text1: '',
  text2: '',
  text3: '',
  text4: '',
  htmlUrl: '',
})
