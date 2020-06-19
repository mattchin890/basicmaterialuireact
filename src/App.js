import React from "react";
import "./styles.css";
import {Button, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
nameStyle: {
  fontStyle: "oblique",
  fontSize: "40px"
},

buttonStyle: {
color: "red",
}
});

export default function App() {
  const classes = useStyles();


  return (
    <div className="App">
      <Typography className = {classes.nameStyle}
      variant = "h2" color = "secondary"> 
      Matthew
      </Typography>

   <Button className = {classes.buttonStyle} 
   color = "primary" variant = "outlined"> 
   This is a button 
   </Button>
    </div>
  );
}
