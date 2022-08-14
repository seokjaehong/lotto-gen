import React, { Component } from 'react';
import MyHeader from './MyHeader';
import RandomNumber from './RandomNumber';
import MyNumberHistory from './MyNumberHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class App extends Component {

  render() {
    // return (
    //   <div>
    //     < MyHeader name="로또번호" />
    //     < MyNumberHistory />
    //     < RandomNumber />
    //   </div >
    //   );
    return (
      <Tabs
        defaultActiveKey="header"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="header" title='들어가기'>
          <MyHeader name="어서오세요" />
        </Tab>
        <Tab eventKey="history" title="당첨이력조회">
          <MyNumberHistory />
        </Tab>
        <Tab eventKey="random" title="추천번호">
          <RandomNumber />
        </Tab>
      </Tabs>
    );
  };


}


export default App;