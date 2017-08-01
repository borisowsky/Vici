import React, { Component } from 'react';

class Question extends Component {
  state = {
    current: this.props.number,
  }

  componentDidUpdate() {
    /**
     * @param props.questionState
     * @type number
     * 0 - Начальное состояние
     * 1 - "Узнать ответ"
     * 2 - "Правильный ответ!"
     * 3 - "Неправильно!"
     * 4 - "Частично правильно"
     * 5 - Дополнительная информация по вопросу
     */

    if (this.state.current === this.props.currentQuestion) {
      // $('.flipbook').turn('next');
    }
  }

  render() {
    return (
      <div className="flipbook__page flipbook__page--description">
        <div className="flipbook__content">
          Pictures here
        </div>
      </div>
    );
  }
}

export default Question;
