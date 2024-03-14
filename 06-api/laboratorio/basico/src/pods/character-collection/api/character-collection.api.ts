import Axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const url = 'https://rickandmortyapi.com/api/character/';
const mockUrl = '/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await Axios.get(url);
  const { results } = data;

  const mockResult = await Axios.get<CharacterEntityApi>(`${mockUrl}`).catch(
    () => {
      return null;
    }
  );

  if (mockResult?.data) {
    return mockResult?.data;
  } else {
    return results;
  }
};
