'use strict';

import React from 'react';

require('styles//HelloGitHub.css');

class HelloGitHubComponent extends React.Component {

  getInitialState() {
    
  }

  render() {
    return (
      <div className="hellogithub-component">
        Please edit src/components///HelloGitHubComponent.js to update this component!
      </div>
    );
  }
}

HelloGitHubComponent.displayName = 'HelloGitHubComponent';

// Uncomment properties you need
// HelloGitHubComponent.propTypes = {};
// HelloGitHubComponent.defaultProps = {};

export default HelloGitHubComponent;
