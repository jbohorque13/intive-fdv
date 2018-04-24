import React, { Component } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Title from "./components/Title";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (

      <div className="App-fdv">
        <Title />
        <Form />
        <Table />
        <Message />
      </div>

    );
  }
}

export default App;
