import React from 'react'
import { Image, Label, Grid, Icon } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import './PokemonList.css'

function PokemonCard() {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
    <div className='PokemonCard'>
      <Icon name='favorite' color={FAV_COLOR}/>
      <Image centered src='' alt='Pokemon Front' />
      <p>Ditto</p>
      <Label color={MAIN_COLOR}>Normal</Label>
    </div>
    </Grid.Column>
  )
}

export default PokemonCard