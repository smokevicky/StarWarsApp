// react imports
import React, { Component } from 'react';

// component imports
import Header from './components/partial-views/header/header';
import Footer from './components/partial-views/footer/footer';
import AppRouting from './App.routing';

// style imports
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <AppRouting></AppRouting>
        <Footer class="footer"></Footer>
      </div>
    );
  }
}

export default App;
