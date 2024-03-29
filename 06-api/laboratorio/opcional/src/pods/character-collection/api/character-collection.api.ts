// import Axios from 'axios';
import { graphqlClient } from 'core/graphql';
import { gql } from 'graphql-request';
import { CharacterEntityApi } from './character-collection.api-model';

interface GetCharacterCollection {
  characters: {
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    query {
      characters {
        results {
          id
          name
          status
          image
        }
      }
    }
  `;

  const { characters } = await graphqlClient.request<GetCharacterCollection>(
    query
  );

  return characters.results;
};
