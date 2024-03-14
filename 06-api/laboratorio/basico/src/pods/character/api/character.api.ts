import Axios from 'axios';
import { Character } from './character.api-model';

const characterListUrl = 'https://rickandmortyapi.com/api/character';
const mockCharacterListUrl = '/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get<Character>(`${characterListUrl}/${id}`);

  const mockResult = await Axios.get<Character>(
    `${mockCharacterListUrl}/${id}`
  ).catch(() => {
    console.error('Error reading character');
    return null;
  });

  if (mockResult?.data) {
    return mockResult?.data;
  } else {
    return data;
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  debugger;
  await Axios.put<Character>(
    `${mockCharacterListUrl}/${character.id}`,
    character
  ).catch(() => {
    console.error('Error on save character');
  });
  return true;
};
