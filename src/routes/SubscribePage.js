import { Typography, Grid } from '@mui/material'


function SubscribePage() {
  return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        sx={{pt: "25px", pb: "100px"}}
      >
        <Typography
        variant='h4'
        component='h1'
        > 
        Subscribe
        </Typography>
      </Grid>
  );
}

export default SubscribePage;