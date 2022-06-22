import { Typography } from "@mui/material"
import * as React from 'react';

export default function BandMember({bandMember}) {
    console.log(bandMember)
    return(
            <Typography
            variant="h4"
            >
                {bandMember.attributes.name}
            </Typography>
        )
}