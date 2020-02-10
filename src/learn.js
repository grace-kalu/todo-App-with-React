import React, { useState } from "react";
import "./App.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(previousState => ({
      seconds: previousState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { seconds } = this.state;
    if (seconds < 10) {
      <h2>You have to be past 10 seconds to see this</h2>;
    }
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

function App() {
  return (
    <div className="App">
      <>
        <label for="input-tag" />
        <input />
      </>

      <Timer />
      <TodoApp />
    </div>
  );
}
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default App;

import { useState, useEffect } from "react";
function useState(initialValue = undefined) {}
const a = useState(0);
const value = a[0];
const updateValue = a[1];

const arr = [1, "updaterFunction"];

const value = arr[0];
const func = arr[1];

const same = [value, func];

function Timer(props) {
  const [seconds, setSeconds] = useState(0);

  function tick() {
    setSeconds(previousSeconds => previousSeconds + 1);
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return ()=>{
      // called when going away
      clearInterval(interval)
    }
  }, /*this is a dependency array*/[]);
  return <div>Seconds: {seconds}</div>;
}
<Timer value="4r3" />;
