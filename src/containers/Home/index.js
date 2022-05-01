import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList/PokemonList';
import './styles.css';
import { getPokemons } from '../../api/getPokemons';
import { setPokemon } from '../../actions';

function Home() {
  const ListOfPokemon = useSelector(state => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons().then((res) => dispatch(setPokemon(res)));
  })

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={ListOfPokemon}/>
    </div>
  );
}

export default Home;
