import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from '@mui/system'
import BandMember from '../components/BandMember'
import { CMSURL, TOKEN } from '../Env'

function BandPage() {
  const [bandMembersData, setBandMembersData] = useState([])

  useEffect(() => {
    axios.get(CMSURL + '/api/band-members?populate=*', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
      }
    }).then(response => {
      console.log(response)
      setBandMembersData(response.data.data)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <Box sx={{
      display: 'flex',
      // gridAutoFlow: 'column'
    }}>
      {bandMembersData.map(bandMember =>
        <BandMember bandMember={bandMember} />
      )}
    </Box>
  )
}

export default BandPage
