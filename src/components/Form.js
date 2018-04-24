import React, { Component } from "react";
//import getCountriesAsync from "../utils/getCountriesAsync";
import { Sentry } from 'react-activity';
import store from '../store';
const API = 'https://restcountries.eu/rest/v2/all';

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user:{
          name: '',
          surname:'',
          country:'',
          birth:'',
        },
        countries:{},
        isLoading:false,
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount () {
        fetch(API)
        .then(response => response.json())
        .then((data) => {
            this.setState({countries:data});
            this.state.user['country'] = data[0].name;
            this.setState({user: this.state.user});
            this.setState({isLoading:true});
        }); 
    }
    handleChange(event) {
        this.state.user[event.target.name] = event.target.value;
        this.setState({user: this.state.user});
    }

    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.user.value);
      event.preventDefault();
      store.dispatch({
        type:"ADD_USER",
        user: this.state.user
      })
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div className="App-Form">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <span>Name: </span>
                            <input type="text" value={this.state.user.name} placeholder="Name Here" name="name" onChange={this.handleChange} />
                        </label>
                        <label>
                            <span>Surname: </span>
                            <input type="text" value={this.state.user.surname} placeholder="Surname Here" name="surname" onChange={this.handleChange} />
                        </label>
                        <label>
                            <span>Country: </span>
                            <select onChange={this.handleChange} name="country">
                                {this.state.countries.map((country, key) => {
                                    return <option key={key} value={country.name}>{country.name}</option>
                                })}
                            </select>
                        </label>
                        <label>
                            <span>Birth: </span>
                            <input type="text" value={this.state.user.birth} placeholder="mm/dd/yyyy" name="birth" onChange={this.handleChange} />
                        </label>
                        <label>
                            <button type="submit" className="Button-Save"> Save </button>
                        </label>

                    </form>
                </div>
            );
        } else {
            return <Sentry />;
        }

    }
  }
