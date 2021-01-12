import React from "react";
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import './styles.css'

const Header = (props) => {
  return (
    <>
      <AppBar position='static'>

        <Toolbar className="head">
          <Typography variant="h6">
            <b>TinyList</b>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}


export default Header;

