import { Title } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import React from "react";

export default function Deposits() {
    return(
        <>
        <Typography component="h2" variant="h6" color="primary" sx={{mb:'1'}}>
        Recent Deposits
        </Typography>
        <Typography component="p" variant="h4">
        $3,024.00
        </Typography>
        <Typography color="text.secondary" sx={{flex:1}}>
        on 15 March, 2019
        </Typography>
        <div>
            <Link color="primary" href="#" >
            View balance
            </Link>
        </div>
        </>
    )
}