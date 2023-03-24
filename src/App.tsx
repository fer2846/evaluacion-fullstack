import { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import pokemonApi from './utils/pokemonApi';
import { PokemonInterface, PokemonStat, PokemonType, IGame, PokemonAbility } from "./interfaces"
import PokemonCard from "./components/PokemonCard";
import { capitalize, validateSession } from "./utils/utils";
import Loading from "./components/Loading";
import { useNavigate } from 'react-router-dom'
import NavBar from "./components/NavBar";

function App() {
  const navigate = useNavigate()
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([])
  const [loading, setLoading] = useState(true)

  const getPokemons = async () => {
    const data = await pokemonApi.get('pokemon').catch(error => console.log(error))
    if(data){
      const { data: { results } } = data
      const tmpPokemons = []
      for (const pokemon of results) {
        const result = await axios.get(pokemon.url).catch(error => {
          console.log(error)
          return
        })

        if(!result)
          break

        const { data: pokemonInfo } = result
        const newPokemon: PokemonInterface = createPokemon(pokemonInfo)
        tmpPokemons.push(newPokemon)
      }
      setPokemons(tmpPokemons)
    }
    setLoading(false)
  }

  const createPokemon = (pokemonInfo: any) => {
    const newPokemon: PokemonInterface = {
      name: capitalize(pokemonInfo.name),
      image: pokemonInfo.sprites["other"].dream_world["front_default"],
      stats: pokemonInfo.stats.map((stat: PokemonStat) => ({base_stat: stat.base_stat, name: stat.stat.name})),
      types: pokemonInfo.types.map((type: PokemonType) => type.type.name ),
      game_indices: pokemonInfo.game_indices.map((game: IGame) => game.version.name ),
      abilities: pokemonInfo.abilities.map( (ability: PokemonAbility) => ({ is_hidden: ability.is_hidden, name: ability.ability.name }))
    }
    return newPokemon
  }

  

  useEffect(()=>{
    const userLogged = validateSession()
    if(!userLogged)
      navigate('/')
    getPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    loading ? <Loading /> :
    <>
      <NavBar />
      <Container>
        <Box>
          <Grid container justifyContent='center' spacing={2}>
            {
              pokemons.map((pokemon: PokemonInterface, idx) => 
                <Grid key={idx} item xs={10} sm={6} md={4}>
                  <PokemonCard pokemon={pokemon} />
                </Grid>
              )
            }
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
