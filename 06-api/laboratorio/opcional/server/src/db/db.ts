import { mockCharacters } from './characters-data';
import { CharacterEntityApi, NewCharacter } from './models';

let characters = [...mockCharacters];

export const getCharacter = async (id: string): Promise<CharacterEntityApi> =>
  characters.find((character) => character.id.toString() === id);

export const updateCharacter = async (
  newCharacter: NewCharacter
): Promise<boolean> => {
  console.log('EDIIIIIIIIIIIIIIIIIIIT¡', newCharacter);
  characters = characters.map((character) =>
    character.id.toString() === newCharacter.id
      ? {
          ...character,
          bestSentences: newCharacter.bestSentences,
        }
      : character
  );

  return true;
};
