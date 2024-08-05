import React from "react";
import StatisticsCards from "./cards";
import { Grid } from "@mui/material";
import CircularProgressCard from "./circularprogresscard";


const Index = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={8}>
          <StatisticsCards />
        </Grid>
        <Grid item xs={12} sm={12} md={4}><CircularProgressCard/></Grid>
      </Grid>
    </>
  );
};

export default Index;
