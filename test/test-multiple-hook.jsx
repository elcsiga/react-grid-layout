import React from 'react';
import ReactDOM from 'react-dom';
require('style!css!../css/styles.css');
require('style!css!../examples/example-styles.css');
typeof window !== "undefined" && (window.React = React); // for devtools

var Layout = require('./examples/12-multiple.jsx');

module.exports = function(Layout) {
  class ExampleLayout extends React.Component {

    state = {
      layout1: [],
      layout2: []
    };

    onLayout1Change = (layout) => {
      this.setState({layout1: layout});
    };

    onLayout2Change = (layout) => {
      this.setState({layout2: layout});
    };

    stringifyLayout1() {
      return this.state.layout1.map(function(l) {
        return <div className="layoutItem" key={l.i}><b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]</div>;
      });
    }

    stringifyLayout2() {
      return this.state.layout1.map(function(l) {
        return <div className="layoutItem" key={l.i}><b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]</div>;
      });
    }

    render(){
      return (
        <div>
          <div className="half-width-container">
            <div className="layoutJSON">
              <div className="columns">
                {this.stringifyLayout1()}
              </div>
            </div>
            <Layout onLayoutChange={this.onLayout1Change} />
          </div>
          <div className="half-width-container">
            <div className="layoutJSON">
              <div className="columns">
                {this.stringifyLayout2()}
              </div>
            </div>
            <Layout onLayoutChange={this.onLayout2Change} />
          </div>
        </div>
      );
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById('content');
    const gridProps = window.gridProps || {};
    ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);
  });
};

