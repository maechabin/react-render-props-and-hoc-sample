import React, { Component } from 'react';
import RenderPropsSample from './RenderPropsSample/RenderPropsSample';
import HocSample from './HocSample/HocSample';
import RenderPropsHocSample from './RenderPropsHocSample/RenderPropsHocSample';

class App extends Component {
  render() {
    return (
      <div>
        <RenderPropsSample />
        <HocSample />
        <RenderPropsHocSample />
      </div>
    );
  }
}

export default App;
