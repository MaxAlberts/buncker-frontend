import { Typography, Grid } from '@mui/material'


function MusicPage() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        sx={{pt: "25px", pb: "100px"}}
      >
        <Typography
        variant='h1'
        component='h1'
        align='center'
        color='secondary'
        > Music
        </Typography>
      </Grid>
    </div>
  );
}

export default MusicPage;