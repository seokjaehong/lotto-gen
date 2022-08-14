import React, { Component } from 'react';
import MyHeader from './MyHeader';
import RandomNumber from './RandomNumber';
import MyNumberHistory from './MyNumberHistory';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div>
        < MyHeader name="로또번호" />
        < MyNumberHistory />
        < RandomNumber />
      </div >);
  };
}


export default App;