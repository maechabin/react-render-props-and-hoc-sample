import React, { Component } from 'react';

const GrandChild1 = props => {
  return (
    <div>
      <h3>GrandChild1</h3>
      <p>{props.bar}</p>
    </div>
  );
};

const GrandChild2 = props => {
  return (
    <div>
      <h3>GrandChild2</h3>
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

class RenderPropsSample extends Component {
  render() {
    return (
      <div>
        <h1>RenderPropsSample</h1>
        <Child1 render={foo => <GrandChild1 bar={foo} />} baz={'Wold'} />
        <Child1 render={foo => <GrandChild2 bar={foo} />} baz={'React'} />
        <Child1 baz={'World'}>{foo => <GrandChild1 bar={foo} />}</Child1>
        <Child2 baz={'React'}>{foo => <GrandChild1 bar={foo} />}</Child2>
      </div>
    );
  }
}

export default RenderPropsSample;
