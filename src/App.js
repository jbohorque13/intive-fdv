import React, { Component } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (

      <div className="App-fdv">
        <Title />
        <Form />
        <Table />
      </div>

    );
  }
}

export default App;
