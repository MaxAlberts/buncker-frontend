import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import { Container } from '@mui/system'
import BandMember from '../components/BandMember'

function BandMembersPage() { 
  const [title, setTitle] = useState([])
  const [bandMembersData, setBandMembersData] = useState([])
  const [text, setText] = useState([])

  useEffect(() => {
      axios.get('http://127.0.0.1:1337/api/band?populate=*', {
          method: 'GET',
          headers: {
            'Authorization' : 'Bearer 795a72bd49899e053b48015b1c839f16d343ffed39274577a2a33b1944a55d4c289699e0e755a5f28ff71ea8f7eb8d8f218abdfb8763c8f028253ef6dc27e51989e7dbe54d49146f4e87921e1cd455eacc8745ee5ee762035b56b65513dedd82b2b3f93e91bafde9c3a540cbd1ceb7ab5bd745a75ec3c3636a445c3d022c8c0f',
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
      {bandMembersData.map( bandMember =>
          <BandMember bandMember={bandMember}/>
      )}
    </Container>
  )
}

export default BandMembersPage