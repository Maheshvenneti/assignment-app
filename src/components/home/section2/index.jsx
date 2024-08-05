import React from "react";
import { Grid } from "@mui/material";
import Activity from "./activity"
import CardSection from "./cards"

const Index = () => {
  return (
    <>
      <Grid container spacing={4} sx={{alignItems:"flex-end"}}>
        <Grid item xs={12} sm={12} md={8}>
            <Activity/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <CardSection/>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
