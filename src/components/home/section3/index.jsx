import React from "react";
import { Grid } from "@mui/material";
import RecentOrders from "./table";
import Feedback from "./feedback";

const Index = () => {
  return (
    <>
      <Grid container spacing={4} sx={{ alignItems: "flex-end" }}>
        <Grid item xs={12} sm={12} md={8}>
          <RecentOrders />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Feedback />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
