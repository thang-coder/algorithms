require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let algorithmsImage = require('../images/algorithms.svg');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={algorithmsImage} alt="Algorithms" />
        <div className="notice">Clean implementations of popular algorithms</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
