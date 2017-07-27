import React, { Component } from 'react';

class Question extends Component {
  state = {
    current: this.props.number,
  }

  componentDidUpdate() {
    if (this.state.current === this.props.currentQuestion) {
      console.log(this.props.questionState);
      // $('.flipbook').turn('next');
    }
  }

  render() {
    return (
      <div className="flipbook__page flipbook__page--description">
        <div className="flipbook__content">{this.props.questionState}</div>
      </div>
    );
  }
}

export default Question;
