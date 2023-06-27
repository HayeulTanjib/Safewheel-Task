import {gql} from '@apollo/client'

export const GET_ALL_POKEMONS = gql `
{
    pokemons(first: 50){
      id  
      name
      number
      classification
      image
    }
}

`