import {gql} from '@apollo/client'

export const GET_ALL_POKEMONS = gql `
{
    pokemons(first: 50){
      id  
      name
      classification
      image
    }
}

`

export const GET_SINGLE_POKEMON = gql `
query Pokemon($id: String) {
    pokemon(id: $id) {
      id  
      name
      number
      classification
      image
    }
  }
`

