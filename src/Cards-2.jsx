import React from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
    // marginLeft:
  },
  gridFirst: {
    // margin: "0 25px 0 0",
    // textAlign: "left",
    // justifyContent: "flex-start",
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
        Card Elements
      </Typography>
      <Paper style={{ padding: "60px" }} elevation={0}>
        <Typography variant="h6" className={classes.h6Bold}>
          Titles
        </Typography>

        <Grid container style={{ marginTop: 10 }}>
          <Grid item className={classes.gridFirst}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Default
            </Typography>
            <Typography component="h5" variant="h5">
              Headline
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Body
            </Typography>
          </Grid>

          <Grid item className={classes.gridOther}>
            <Grid item>
              <Typography variant="subtitle2" className={classes.cardName}>
                Avatar Left
              </Typography>
              <CardHeader
                avatar={
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                }
                title="Headline"
                subheader="Body"
              />
            </Grid>
          </Grid>

          {/* <Grid item className={classes.gridFirst}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Default
            </Typography>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
            <div>
            <Typography component="h5" variant="h5">
              Headline
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Body
            </Typography>
            </div>
          </Grid> */}
        </Grid>
      </Paper>
    </div>
  );
}
