import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Box } from "@mui/material";
import { Container } from '@mui/system'
import BandMember from '../components/BandMember'
import { CMSURL, CMSTOKEN } from '../Env'

function BandPage() { 
  const [title, setTitle] = useState([])
  const [bandMembersData, setBandMembersData] = useState([])
  const [text, setText] = useState([])

  useEffect(() => {
      axios.get(CMSURL + '/api/band?populate=*', {
          method: 'GET',
          headers: {
            'Authorization' : CMSTOKEN,
          }
      }).then( response => {
          console.log(response)
          setTitle(response.data.data.attributes.title)
          setBandMembersData(response.data.data.attributes.band_members.data)
          setText(response.data.data.attributes.body)
      }).catch(e => {
          console.log(e)
      })
  }, [])

  return (
    <Container>
      <Box sx={{justifyContent: 'center'}}>
        {bandMembersData.map( bandMember =>
            <BandMember bandMember={bandMember}/>
        )}
      </Box>
      <Typography
      variant='h2'
      align='center'
      >
          {title}
      </Typography>
      <Typography
      variant='h6'
      align='left'
      >
          {text}
      </Typography>
    </Container>
  )
}

export default BandPage