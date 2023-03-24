import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PokemonInterface } from "../interfaces/index";
import CircularStatic from './CircularPercentaje';
import { Grid } from '@mui/material';
import pokemonLogo from "../assets/images/pokemon.png";
import { Modal } from './Modal';
import ComplementCard from "./ComplementCard";

interface TMPPokemon {
    pokemon: PokemonInterface;
    isModal?: boolean;
} 

function PokemonCard(props: TMPPokemon) {
  const [openModal, setOpenModal] = useState(false)
  const { pokemon , isModal } = props
  
  const closeModal = () => {
    setOpenModal(false)
  }
  return (
    <>
			<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				title={
						<Typography variant='h4' textAlign='center' >{pokemon.name}</Typography>
				}
			/>
			<div 
					style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "300px",
					}}
			>
					<img 
					src={pokemon.image}
					alt={pokemon.name}
					style={{
							width: "90%",
							height: "auto",
							maxHeight: "300px"
					}}
					/>
			</div>
			<CardContent>
					<Typography gutterBottom variant="h5" component="div" textAlign='center'>
						Stats
					</Typography>
					<Grid container justifyContent='center' spacing={3}>
							{
							pokemon.stats.map((stat, idx) => 
								<Grid key={idx} item xs={4}>
									<CircularStatic value={stat.base_stat} stat={stat.name} />
								</Grid>
							)
							}
					</Grid>
					{
						isModal &&
						<ComplementCard pokemon={pokemon} />
					}
			</CardContent>
			{
				!isModal &&
				<CardActions sx={{display: "flex", justifyContent: "flex-end", padding: "8px 16px"}} >
						<Button onClick={()=>setOpenModal(true)} size="small">Learn More</Button>
						<img 
						src={pokemonLogo}
						alt='pokemon logo'
						style={{
								height: "30px",
								marginLeft: "15px"
						}}
						/>
				</CardActions>
			}
			</Card>
			{ openModal && <Modal pokemon={pokemon} exit={closeModal} /> }
    </>
  );
}

export default PokemonCard
