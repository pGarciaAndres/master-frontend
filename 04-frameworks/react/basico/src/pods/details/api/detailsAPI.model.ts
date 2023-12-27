interface Origin {
  name: string
}

interface Location {
  name: string
}

export interface DetailsAPI {
  avatar_url?: string
  image?: string
  bio?: string
  company?: string
  html_url?: string
  login?: string
  name: string
  species?: string
  status?: string
  location?: string | Location
  origin?: Origin
}
