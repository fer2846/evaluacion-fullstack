import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import pokemonLogo from "../assets/images/pokemonLogo.jpg"
import Typography from '@mui/material/Typography';

const ErrorPage = () => {
  return (
    <Container>
      <Grid sx={{
        position: 'absolute',
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }} container justifyContent='center'>
        <Grid item xs={6}>
          <Grid container justifyContent='center' direction='column' >
            <div 
              style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "180px"
            }}
          >
              <img 
              src={pokemonLogo}
              alt='logo'
              style={{
                  width: "95%",
                  height: "auto",
              }}
              />
          </div>
          <Typography variant='h2' textAlign='center'>404</Typography>
          <Typography variant='h2' textAlign='center'>PAGE NOT FOUND</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ErrorPage