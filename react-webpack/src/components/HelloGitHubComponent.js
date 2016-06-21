'use strict';

import React from 'react';

require('styles//HelloGitHub.css');

class HelloGitHubComponent extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();

    this.state = {
      contentGitHub: 'No Data'
    };
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
