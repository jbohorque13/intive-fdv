import React, { Component } from "react";
import store from '../store';
import { Sentry } from 'react-activity';
var localStorage = require('localStorage');

export default class Table extends Component {
    constructor() {
      super();
      this.state = {
        Name:'Name',
        Surname:'Surname',
        Birthday:'Birthday',
        users:[],
        reloading:true,
      };
      store.subscribe( () => {
          this.setState({
            users:store.getState().users
          });
          this.setLocalStorage();
      });
    }
    componentWillMount = () => {
      //localStorage.clear();
      var DataUsers = localStorage.getItem('Users');
      if(DataUsers){
        this.setState({users: JSON.parse(DataUsers)});
        store.getState().users = JSON.parse(DataUsers);
      }
      this.setState({reloading:false});
    }
    setLocalStorage = () => {
      var DataUsers = localStorage.getItem('Users');
      var users = [];
      console.log('DataUsers', DataUsers);
      if(DataUsers){
        users = JSON.parse(DataUsers);
        localStorage.setItem('Users', JSON.stringify(this.state.users));
      } else {
        users = this.state.users;
        localStorage.setItem('Users', JSON.stringify(users));
      }
      
    }

    render() {
      var styleP = {
        width:'33.333%',
        float:'left',
        textAlign:'center',
        marginTop:10,
      }
      if (this.state.reloading) {
        return <Sentry/>
      } else {
        return (
          <div className="App-Table">
                <div className="Header">
                    <h3>
                        Name
                    </h3>
                    <h3>
                      Surname
                    </h3>
                    <h3>
                      Birthday
                    </h3>
                </div>
                <div className="Body">
                  { (this.state.users).map((user, key) => {
                      return (
                          <div> 
                            <p key={key} style={styleP}>{user.name} {user.surname} </p>
                            <p key={key} style={styleP}>{user.country} </p>
                            <p key={key} style={styleP}>{user.birth}  </p>
                          </div>
                      );
                  })}
                </div>
            </div>
        );
      }
    }
  }
