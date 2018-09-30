import React, { Component } from 'react';

const GrandChild1 = props => {
  return (
    <div>
      <h3>GrandChild1</h3>
      <p>{props.bar}</p>
    </div>
  );
};

const Child1 = props => {
  const { baz } = props;
  const foo = `Hello ${baz}`;
  const grandChild = props.render !== undefined ? props.render(foo) : props.children(foo);
  return (
    <div>
      <h2>Child</h2>
      {grandChild}
    </div>
  );
};

const Child2 = props => {
  const { baz } = props;
  const foo = `Hello ${baz}`;
  return (
    <div>
      <h2>Child2</h2>
      {props.children(foo)}
    </div>
  );
};

function withSample(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <h1>RenderPropsHocSample</h1>
          <Child1 render={foo => <WrappedComponent bar={foo} />} baz={'Wold'} />
          <Child1 render={foo => <WrappedComponent bar={foo} />} baz={'React'} />
          <Child1 baz={'World'}>{foo => <WrappedComponent bar={foo} />}</Child1>
          <Child2 baz={'React'}>{foo => <WrappedComponent bar={foo} />}</Child2>
        </div>
      );
    }
  };
}

const RenderPropsHocSample = withSample(GrandChild1);

export default RenderPropsHocSample;
