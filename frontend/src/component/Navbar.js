import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.css"

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let history = useHistory();
  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" >
      <Toolbar className="nav_bar" >
        <Typography variant="h6" className={classes.title}>
         Nebula-recruiters.com 
        </Typography>
        <IconButton
          edge="end"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/about")}>
                About
              </Button>
              <Button color="inherit" onClick={() => handleClick("/contact")}>
                Contact Us
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/about")}>
                About
              </Button>
              <Button color="inherit" onClick={() => handleClick("/service")}>
                Service
              </Button>
              <Button color="inherit" onClick={() => handleClick("/contact")}>
                Contact Us
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
