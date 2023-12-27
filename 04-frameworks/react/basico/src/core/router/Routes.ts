import { generatePath } from 'react-router-dom'

interface SwitchRoutes {
  home: string
  detail: string
  rickMorty: string
  rickMortyDetail: string
}

export const switchRoutes: SwitchRoutes = {
  home: '/',
  detail: '/detail/:login',
  rickMorty: '/rickandmorty',
  rickMortyDetail: '/rickandmorty/detail/:login',
}

interface Routes extends Omit<SwitchRoutes, 'detail'> {
  detail: (login: string, rickMortyPage?: boolean) => string
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string, rickMortyPage = false) =>
    generatePath(
      rickMortyPage ? switchRoutes.rickMortyDetail : switchRoutes.detail,
      { login }
    ),
}
