import React, { Component } from 'react';
import TabSelector from './TabSelector';
import './App.css';

const Home = () => <p>This is the Home component!</p>;
const About = () => <p>This challenge is about tabs!</p>;
const Contact = () => <p>Feel free to contact us!</p>;
const Error = () => <p>Something went <strong>wrong</strong>!</p>;


class App extends Component {
  state = {
    activeId:"",
  };

  handleChangeTab = (event) =>{
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId});
  };

  getTabContent() {
    switch(this.state.activeId) {
      case "home":
        this.State=true;
        return <Home />;
      case "about":
        this.State =true;
        return <About />;
      case "contact":
        this.State=true;
        return <Contact />;
      default:
        return <Error />;
    }
  }
  render() {
    return (
      <div className="App">
        <TabSelector
          handleChangeTab={this.handleChangeTab}
          activeId={this.state.activeId}
        />
        <div className="App-content">{this.getTabContent()}</div>
      </div>
    );
  }
}

export default App;
