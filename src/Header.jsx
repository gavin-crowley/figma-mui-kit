import React from "react";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  headerStyles: {
    justifyContent: "space-between",
    padding: 0,
    marginBottom: 50,
  },
  small: {
    width: 24,
    height: 24,
  },
  align: {
    display: "inline-block",
    marginLeft: 12,
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.headerStyles}>
      <Typography variant="h3">Cards</Typography>
      <div>
        <Typography variant="subtitle2" className={classes.align}>
          Material Design System
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src="Figma_icon.png"
          className={classes.small}
          //   className={classes.align}
        />
      </div>
    </Toolbar>
  );
}
