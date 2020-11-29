import React, { Component } from 'react';

class TabSelector extends Component {
  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChangeTab}
          className={activeId === "home" ? "active" : ""}
        >
          HOME
        </button>
        <button
          id="about"
          onClick={this.props.handleChangeTab}
          className={activeId === "about" ? "active" : ""}
        >
          ABOUT
        </button>
        <button
          id="contact"
          onClick={this.props.handleChangeTab}
          className={activeId === "contact" ? "active" : ""}
        >
          CONTACT
        </button>
      </div>
    );
  }
}

export default TabSelector;


