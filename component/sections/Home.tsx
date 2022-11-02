import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import bgImage from "../../assets/Home.jpg";
import React from "react";

function HomeSection() {
  return (
    <Grid component={"section"} className="section bg-home home-half active">
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:"0px 10px",
          zIndex: 99,
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Grid container flexDirection={"column"}  item flex={2}>
          <Typography component={"p"} variant="h5" >AWESOM HEADER</Typography> 
          <Typography variant="h3"  >AWESOM HEADER</Typography>
          <Typography  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem quos nostrum beatae optio voluptatem tempore asperiores nulla reiciendis a sunt, eaque ut itaque tempora, placeat et maiores necessitatibus. Quia.</Typography>
        </Grid>
        <Grid item flex={2}>
          <Typography>AWESOM HEADER</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomeSection;
