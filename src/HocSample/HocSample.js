import React, { Component } from 'react';

const Child = props => {
  const { foo, bar } = props;
  return (
    <div>
      <h2>child</h2>
      <p>
        {bar} {foo}
      </p>
    </div>
  );
};

function withSample(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        bar: 'Hello',
      };
    }

    render() {
      return (
        <div>
          <h1>HocSample</h1>
          <WrappedComponent bar={this.state.bar} {...this.props} />
        </div>
      );
    }
  };
}

const HocSample = withSample(Child);

export default HocSample;
