
import * as React from 'react';

import './App.css';
import Description from './components/Description';
import Header from './components/Header';
import TodoList from './components/TodoList';

import logo from './logo.svg';
// import * as Hello from './components/Hello';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header name="React" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

          <Description countBy={1} />

          <TodoList/>
      </div>
    );
  }
}

export default App;
