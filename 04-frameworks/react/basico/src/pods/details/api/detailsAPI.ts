import { DetailsAPI } from '@/pods/details'
import { getDefaultDetails } from '@/pods/details'

export const getMemberDetail = async (
  login: string,
  rickMortyPage = false
): Promise<DetailsAPI> => {
  const url = !rickMortyPage
    ? `https://api.github.com/users/${login}`
    : `https://rickandmortyapi.com/api/character/${login}`

  const response = await fetch(url)

  if (!response.ok) {
    return getDefaultDetails()
  }

  const json = await response.json()
  return json
}
