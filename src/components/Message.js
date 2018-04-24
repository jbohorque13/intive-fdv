import React, { Component } from "react";
//import getCountriesAsync from "../utils/getCountriesAsync";
import { Sentry } from 'react-activity';
import store from '../store';
//const API = 'https://restcountries.eu/rest/v2/all';

export default class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user:{
          name: '',
          surname:'',
          country:'',
          birth:'',
        }, 
        displayMessage:false,
    };
    store.subscribe( () => {
        console.log('store.getState().users ', store.getState().users);
        console.log('store.getState().users.length ', store.getState().users.length);
        console.log('store.getState().users.length last', store.getState().users[store.getState().users.length - 1]);
        this.setState({
          user: store.getState().users[store.getState().users.length - 1],
        }); 
        this.setState({
            displayMessage: true,
        }); 

        setTimeout( () => {
            this.setState({
                displayMessage: false,
            }); 
        }, 8000);
        //this.setLocalStorage();
    });

    }


    render() {
        let user = this.state.user;
        var styleMessage = {
            padding:'2%',
            backgroundColor:'#509e50',
            display:'block',
            float: 'left',
            marginTop:'2%',
            borderRadius:3
        };
        var styleP = {
            color:'#000',
        }

        if(this.state.displayMessage) {
            return (
                <div style={styleMessage}>
                    <p style={styleP}> 
                        Hello {user.name} {user.surname} from { user.country } you were born on {user.birth}
                    </p> 
                </div>
            );
        }  else {
            return(
                <div>
                    
                </div>
            )
        }
       
    }
  }
