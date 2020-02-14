import React, { Component } from "react";
 
import Calendar from "react-material-ui-calendar";
import { render } from "react-dom";
 
//documentation for the use of this calendar available https://www.npmjs.com/package/react-material-ui-calendar


export default class Schedule extends Component {
    callBackFunction = value => {
      console.log("The selection is  -> ", value);
    };
    render(){
      return (
        <Calendar
          generalStyle={{
            maxWidth: "100%",
            margin: "0 auto",
            backgroundColor: "rgba(256,256,256,1)",
            height: "100%",
            overflow: "auto"
          }}
          light={false}
          selection={this.callBackFunction}

        />
      );
        }
    }
  