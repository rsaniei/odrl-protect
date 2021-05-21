/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.upm.es/" className={classes.block}>
                UNIVERSIDAD POLITÉCNICA DE MADRID
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://oeg.fi.upm.es/index.html" className={classes.block}>
                ONTOLOGY ENGINEERING GROUP
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://protect-network.eu/" className={classes.block}>
                PROTECT
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://www.creative-tim.com?ref=mdr-footer"
              target="_blank"
              className={classes.a}
            >
              Creative Tim
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
