import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList/PokemonList';
import './styles.css';
import { getPokemons } from '../../api/getPokemons';
import { setPokemon } from '../../actions';
import axios from 'axios';

function Home() {
  const ListOfPokemon = useSelector(state => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons()
      .then((res) => {
        const pokemonList = res
        return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)));
      })
      .then((res) => {
        const data = res.map(pokemon => pokemon.data);
        dispatch(setPokemon(data))
      })
      .catch((err) => {
        console.log('err', err);
      })
  })

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={ListOfPokemon} />
    </div>
  );
}

export default Home;
