import React from "react";
import Header from "./Header";
import { Grid, Paper } from "@material-ui/core";
import Cards1 from "./Cards-1";
import Cards2 from "./Cards-2";
import Cards3 from "./Cards-3";

function App() {
  return (
    <Paper
      style={{
        backgroundColor: "#e5e5e5",
        padding: "50px 64px 64px 64px",
      }}
      square
      elevation={0}
    >
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          {/* <Grid item xs={false} sm={2} /> */}
          {/* <Grid item xs={12} sm={8}> */}
          {/* <Cards1 /> */}
          {/* <Cards2 /> */}
          <Cards3 />
          {/* </Grid> */}
          {/* <Grid item xs={false} sm={2} /> */}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
