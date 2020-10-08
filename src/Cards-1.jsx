import React from "react";
import { Card, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles({
  card: {
    width: 256,
    height: 128,
  },
  h6Style: {
    color: "rgba(0, 0, 0, 0.6)",
    marginBottom: 12,
  },
  h6Bold: {
    fontWeight: 600,
    marginBottom: 32,
  },
  cardName: {
    color: "#9e9e9e",
    marginBottom: 12,
  },
  gridFirst: {
    margin: "0 25px 0 0",
  },
  gridOther: {
    margin: "0 25px",
  },
});

export default function Cards() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" className={classes.h6Style}>
        Cards elevation and overlay
      </Typography>
      <Paper style={{ padding: "60px" }} elevation={0}>
        <Typography variant="h6" className={classes.h6Bold}>
          Elevation
        </Typography>

        <Grid container style={{ marginTop: 10 }}>
          <Grid item className={classes.gridFirst}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Flat Cards
            </Typography>
            <Card className={classes.card} variant="outlined" />
          </Grid>
          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Floating cards - light dark
            </Typography>
            <Card className={classes.card} raised={0} />
          </Grid>
          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Hover cards - light dark
            </Typography>
            <Card className={classes.card} raised={1} />
          </Grid>
          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Dropdowns - light dark
            </Typography>
            <Card className={classes.card} raised={2} />
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: 64 }}>
          <Grid item className={classes.gridFirst}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Flat Cards
            </Typography>
            <Card className={classes.card} variant="outlined" />
          </Grid>
          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Floating cards - white
            </Typography>
            <Card className={classes.card} raised={0} />
          </Grid>
          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Hover cards - white
            </Typography>
            <Card className={classes.card} raised={1} />
          </Grid>
          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Dropdowns - white
            </Typography>
            <Card className={classes.card} raised={2} />
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          className={classes.h6Bold}
          style={{ marginTop: 80 }}
        >
          Overlay
        </Typography>

        <Grid container style={{ marginTop: 10 }}>
          <Grid item className={classes.gridFirst}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Selected Cards
            </Typography>
            <div>
              <Card
                elevation={0}
                className={classes.card}
                style={{ backgroundColor: "#E4F2FE" }}
              />
              <CheckCircleIcon style={{ color: "#2196F3" }} />
            </div>
          </Grid>
          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Hover
            </Typography>
            <Card
              elevation={0}
              className={classes.card}
              style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
