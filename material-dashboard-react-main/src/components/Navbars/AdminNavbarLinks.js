import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Home from "@material-ui/icons/Home";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();

  return (
    <div>
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Home"
        className={classes.buttonLink}
      // muiClasses={'href' = "www.google.com"}
      >
        <Home className={classes.icons} />
      </Button>

    </div>
  );
}
