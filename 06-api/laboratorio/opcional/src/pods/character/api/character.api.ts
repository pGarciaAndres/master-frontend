import { graphqlClient, mockGraphqlClient } from 'core/graphql';
import { gql } from 'graphql-request';
import { Character } from './character.api-model';

interface GetCharacter {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  // From API
  const query = gql`
    query {
      character(id: ${id}) {
        id
        name
        status
        species
        gender
      }
    }
  `;

  const { character } = await graphqlClient.request<GetCharacter>(query);

  // From Mock
  const mockQuery = gql`
  query {
    character(id: ${id}) {
      id
      name
      status
      species
      gender
      bestSentences
    }
  }
`;

  const { character: mockCharacter } = await mockGraphqlClient
    .request<GetCharacter>(mockQuery)
    .catch(() => {
      return { character: null };
    });

  if (mockCharacter?.hasOwnProperty('bestSentences')) {
    return mockCharacter;
  } else {
    return { ...character, bestSentences: '' };
  }
};

interface SaveCharacter {
  saveCharacter: boolean;
}

export const saveCharacter = async (character: Character): Promise<boolean> => {
  const query = `
    mutation($character: CharacterInput!) {
      saveCharacter(character: $character)
    }
  `;
  debugger;
  const { saveCharacter } = await mockGraphqlClient
    .request<SaveCharacter>(query, {
      character,
    })
    .catch(() => {
      return { saveCharacter: false };
    });
  debugger;

  return saveCharacter;
};
