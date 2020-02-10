import React from "react";
import Table from "./components/Table";
import Input from "./components/Input"
import "./App.css";
import Header from "./components/Header";
import TodosData from "./components/todosData";

function App() {
  return (
    <div className="App">
      <Header />
      <Input/>
      <Table data ={TodosData} />
    </div>
  );
}

export default App;
