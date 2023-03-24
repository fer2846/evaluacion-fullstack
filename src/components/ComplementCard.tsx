import { PokemonInterface } from "../interfaces/index";
import { Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { abilitiesMessages } from "../utils/utils";
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface IComplementPokemon {
    pokemon: PokemonInterface;
} 

const ComplementCard = (props: IComplementPokemon) => {

  const { pokemon } = props

  return (
    <>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={6}>
          <Typography mt={2} gutterBottom variant="h5" component="div" textAlign='center'>
            {pokemon.abilities.length > 1 ? 'Abilities' : 'Ability'} 
          </Typography>
          <Grid container justifyContent='center' spacing={1}>
              {
              pokemon.abilities.map((ability, idx) => 
              <Grid key={idx} item xs={12}>
                  <Tooltip title={abilitiesMessages(ability.is_hidden)} >
                    <Box component='div' sx={{ 
                      bgcolor: ability.is_hidden ? 'text.disabled' : 'primary.main', 
                      color: ability.is_hidden ? 'background.paper' : 'primary.contrastText', 
                      p: 1,
                      textAlign: "center"
                    }}>
                      {ability.name}
                    </Box>
                  </Tooltip>
              </Grid>
              )
              }
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Typography mt={2} gutterBottom variant="h5" component="div" textAlign='center'>
            {pokemon.types.length > 1 ? 'Types' : 'Type'} 
          </Typography>
          <Grid container justifyContent='center' spacing={1}>
              {
              pokemon.types.map((type, idx) => 
              <Grid key={idx} item xs={12}>
                  <Tooltip title={`This pokemon belongs to ${type} type`} >
                    <Box component='div' sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'primary.contrastText', 
                      p: 1,
                      textAlign: "center"
                    }}>
                      {type}
                    </Box>
                  </Tooltip>
              </Grid>
              )
              }
          </Grid>
        </Grid>
      </Grid>

      <Typography mt={2} gutterBottom variant="h5" component="div" textAlign='center'>
        Appears in these games 
      </Typography>
      <Grid container justifyContent='center'>
          {
            pokemon.game_indices.map((game, idx) => 
              <Grid key={idx} item xs={3} mb={1}>
                  <Chip label={game} color='info' variant='outlined'/>
              </Grid>
            )
          }
      </Grid>
    </>
  )
}

export default ComplementCard