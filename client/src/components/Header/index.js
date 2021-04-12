import React from "react";
import NavLink from "../Nav";

import "./header.css";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "center",
    }
}));

const Header = () => {

  const classes = useStyles();

  return (
    <div className="header-container">
       <NavLink />
    <Container fixed className={classes.root}>
      <img href="/" src={require("../../images/logo.png").default} alt="logo" />
      </Container>
    </div>
  );
};

export default Header;
