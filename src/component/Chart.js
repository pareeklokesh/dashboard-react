import React from "react";
import CharImg from "./assets/img/chart.png"
import { CardMedia } from "@mui/material";

function Chart(){
    return(
        <>
        <CardMedia component="img" fullWidth
        image={CharImg} alt="Img" />
        </>
    )
}

export default Chart;