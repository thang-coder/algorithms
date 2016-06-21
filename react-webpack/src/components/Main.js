// require('normalize.css/normalize.css');
// require('styles/App.css');

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import React from 'react';
import HelloGitHubComponent from 'components/HelloGitHubComponent';

let algorithmsImage = require('../images/algorithms.svg');

class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className='index'>
          <img src={algorithmsImage} alt="Algorithms" />
          <div className='notice'>Clean implementations of popular algorithms</div>
          <HelloGitHubComponent />
        </div>
      </MuiThemeProvider>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
