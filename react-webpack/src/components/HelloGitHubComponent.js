'use strict';

import React from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('styles//HelloGitHub.css');

class HelloGitHubComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      contentGitHub: 'No Data'
    };
  }

  componentDidMount() {
    fetch('//raw.githubusercontent.com/thang-coder/algorithms/master/README.md')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.text(); // this is a promise
    })
    .then(text => this.setState({contentGitHub: text}));
  }

  render() {
    return (
      <div className='hellogithub-component'>
        Data: {this.state.contentGitHub}
      </div>
    );
  }
}

HelloGitHubComponent.displayName = 'HelloGitHubComponent';

// Uncomment properties you need
// HelloGitHubComponent.propTypes = {};
// HelloGitHubComponent.defaultProps = {};

export default HelloGitHubComponent;
