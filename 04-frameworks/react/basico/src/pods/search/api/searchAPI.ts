import { MemberAPI } from '@/pods/search/api/searchAPI.model'

export const getMembers = async (
  search: string,
  page: number,
  perPage: number,
  rickMortyPage = false
): Promise<MemberAPI[]> => {
  let url = ''

  if (!rickMortyPage) {
    url = `https://api.github.com/orgs/${search}/members?per_page=${perPage}&page=${page}`
  } else {
    const first = perPage * (page - 1) + 1
    const last = page * perPage

    const urlByName = `https://rickandmortyapi.com/api/character/?name=${search}`

    const res = await fetch(urlByName)
    const { results } = await res.json()

    if (!results) {
      return []
    }

    const set = []
    for (let i = first - 1; i < last; i++) {
      if (results[i]) {
        set.push(results[i].id)
      }
    }

    url = `https://rickandmortyapi.com/api/character/${set}`
  }

  const response = await fetch(url)
  if (!response.ok) {
    return []
  }

  const result = await response.json()
  return result
}
