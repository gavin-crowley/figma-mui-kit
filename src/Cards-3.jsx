import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles({
  root: {
    maxWidth: 344,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
    margin: "0 28px 0 0",
  },
  gridOther: {
    margin: "0 28px",
  },
});

export default function Cards() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" className={classes.h6Style}>
        Cards example
      </Typography>
      <Paper style={{ padding: "60px" }} elevation={0}>
        <Grid container style={{ marginTop: 64 }}>
          <Grid item className={classes.gridFirst}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Image top
            </Typography>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image="diagonal.png" />
              <CardHeader
                avatar={
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <ShareIcon />
                  </IconButton>
                }
                title="Overline"
                subheader="Headline"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Greyhound divisively hello coldly wonderfully marginally far
                  upon excluding.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Button
                </Button>
                <Button size="small" color="primary">
                  Button
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Title Top
            </Typography>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <ShareIcon />
                  </IconButton>
                }
                title="Headline"
                subheader="Body"
              />
              <CardMedia className={classes.media} image="diagonal.png" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Greyhound divisively hello coldly wonderfully marginally far
                  upon excluding.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Button
                </Button>
                <Button size="small" color="primary">
                  Button
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Image top
            </Typography>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image="diagonal.png" />
              <CardHeader title="Headline" subheader="Body" />
            </Card>
          </Grid>

          <Grid item className={classes.gridOther}>
            <Typography variant="subtitle2" className={classes.cardName}>
              Image top + icons
            </Typography>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image="diagonal.png" />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <InfoIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
