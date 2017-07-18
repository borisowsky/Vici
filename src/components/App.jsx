import React, { Component } from 'react';
import Cover from './pages/Cover';
import Description from './pages/Description';
import Question from './pages/Question';

class App extends Component {
  componentDidMount() {
    $('.flipbook').turn({
      width: 722,
      height: 500,
      gradients: true,
      autoCenter: true,
    });
  }

  render() {
    return (
      <div className="flipbook-viewport">
        <div className="container">
          <div className="flipbook">
            <div className="flipbook__page flipbook__page--main">
              <Cover title="Под российской короной" />
            </div>

            <Description number="1" />
            <Question number="1" />

            <Description number="2" />
            <Question number="2" />

            <Description number="3" />
            <Question number="3" />

            <Description number="4" />
            <Question number="4" />

            <Description number="5" />
            <Question number="5" />

            <Description number="6" />
            <Question number="6" />

            <Description number="7" />
            <Question number="7" />

            <Description number="8" />
            <Question number="8" />

            <Description number="9" />
            <Question number="9" />

            <Description number="10" />
            <Question number="10" />

            <Description number="11" />
            <Question number="11" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
