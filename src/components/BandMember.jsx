import { CMSURL } from "../Env";
import { Typography, Card, Box, CardContent } from "@mui/material"
import * as React from 'react'

export default function BandMember({ bandMember }) {
  console.log(bandMember)
  return (
    <Card sx={{ maxWidth: '500px', p: '20px' }} style={{ backgroundColor: "#282a36" }} elevation='0'>
      <img
        src={CMSURL + bandMember.attributes.image.data.attributes.formats.medium.url}
        style={{ maxHeight: '500px', maxWidth: '500px' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" color="tertiary.main" textAlign='center' sx={{ pt: "16px" }}>
          {bandMember.attributes.name}
        </Typography>
        <Box sx={{ pt: "25px", pb: "100px", px: "25px" }}>
          <CardContent>
            <Typography variant="body" color="tertiary.main" >
              {bandMember.attributes.bio}
            </Typography>
          </CardContent>
        </Box>
      </CardContent>
    </Card>
  )
}
