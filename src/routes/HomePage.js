import NewsItem from "../components/NewsItem";
import { TOKEN, CMSURL } from "../Env";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Divider, Grid } from "@mui/material";

function HomePage() {
  const [data, setData] = useState([])

  useEffect(() => {
      axios.get(CMSURL + '/api/news-items?populate=*', {
          method: 'GET',
          headers: {
            'Authorization' : 'Bearer ' + TOKEN,
          }
      }).then( response => {
          console.log(response)
          setData(response.data.data)
      }).catch(e => {
          console.log(e)
      })
  }, [])

  return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        sx={{pt: "25px", pb: "100px", px: "25px"}}
      >
        {
          data.map( newsItem =>
            <div>
            <Grid item sx={{pb: "25px"}}>
            <NewsItem 
            title={newsItem.attributes.title}
            content={newsItem.attributes.content}
            imageData={newsItem.attributes.image.data}
            date={newsItem.attributes.date}
            />
            </Grid>
            <Divider color='white' sx={{borderBottomWidth: 4}} />    
            </div>   
          )
        }
      </Grid>
  );
}

export default HomePage;