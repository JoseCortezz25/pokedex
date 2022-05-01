import React from 'react'
import { useEffect } from 'react'
import { Image, Label, Grid, Icon } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import { getPokemon } from '../../api/getPokemons'
import './PokemonList.css'

function PokemonCard({ pokemon }) {

  useEffect(() => {
    getPokemon(pokemon.url).then((res) => {
      console.log('res', res);
    })
  },[pokemon.url])

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <div className='PokemonCard'>
      <Icon name='favorite' color={FAV_COLOR}/>
      <Image centered src={pokemon.url} alt='Pokemon Front' />
      <p>{pokemon.name}</p>
      <Label color={MAIN_COLOR}>Normal</Label>
    </div>
    </Grid.Column>
  )
}

PokemonCard.defaultProps = {
  pokemon: {}
}

export default PokemonCard