import { FIRST_RICK_SEARCH, FIRST_SEARCH } from '@/core/context/constants'

export const isRickMortyPage = (): boolean =>
  window.location.pathname.includes('/rickandmorty')

export const getInitialSearch = (): string =>
  isRickMortyPage() ? FIRST_RICK_SEARCH : FIRST_SEARCH
