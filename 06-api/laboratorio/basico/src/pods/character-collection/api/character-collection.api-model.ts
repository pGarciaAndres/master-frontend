export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

interface Location {
  name: string;
  url: string;
}
