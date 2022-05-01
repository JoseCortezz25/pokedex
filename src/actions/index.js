import { SET_POKEMON } from "./type"

export const setPokemon = (pokemon) => ({
  type: SET_POKEMON,
  payload: pokemon
})