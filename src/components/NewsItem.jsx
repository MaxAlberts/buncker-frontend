import { Typography, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CMSURL} from '../Env'
import * as React from 'react'

export default function NewsItem({title, content, imageData, date}) {
    console.log(title, content, imageData, date)
    var cardMedia = null
    if (imageData !== null) {
        cardMedia = 
        <Box sx={{display: 'flex', p: '16px'}}>
            <CardMedia
            component="img"
            image={CMSURL + imageData.attributes.formats.medium.url}
            height='300'
            sx={{objectFit: 'contain'}}
            />
        </Box>
        
    } 

    return(
    <Card style={{backgroundColor: "#282a36"}} elevation='0'>
        <Typography gutterBottom variant="h4" component="div" color="tertiary.main" textAlign='center' sx={{pt: "16px"}}>
                {title}
        </Typography>
        <Box sx={{ maxWidth: '800px' }}>
            <CardContent>
                <Typography variant="body" color="tertiary.main" >
                    {content}
                </Typography>
            </CardContent>
            {cardMedia}
        </Box>
    </Card>
    )
}