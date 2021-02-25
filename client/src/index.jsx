import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import MyFirstComponent from './components/MyFirstComponent.jsx';

const Index = () => {
  return (
    <div id="index-wrapper">
      Hello World
      <hr></hr>
      <MyFirstComponent />
    </div>
  )
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("app"));