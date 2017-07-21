import React, { Component } from 'react';
import questionsList from '../../questions.json';

class Question extends Component {
  state = {
    current: this.props.number,
    answers: [],
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const { answers, current } = this.state;
    const { rightAnswers } = questionsList[current];
    const [
      ansLen,
      rightAnsLen,
    ] = [
      answers.length,
      rightAnswers.length,
    ];

    // Т. к. нам известно, что максимум правильных ответов - 2, то нет смысла делать проверку на длину, не равную 1
    if (ansLen === 0) {
      console.log('Выберите ответ');
    } else if ((ansLen < rightAnsLen) && rightAnsLen.length !== 1) {
      console.log('Выберите ещё один ответ');
    }

    console.log(
      `Вопрос ${this.state.current}`,
      `Вы ответили: ${answers.toString()}`,
      `Правильно: ${rightAnswers.toString()}`,
    );
  }

  chooseAnswer = (e) => {
    const { checked, value } = e.target;
    let { answers } = this.state;

    if (checked) {
      answers = [...answers, value];
      answers.sort();
      this.setState({ answers }, () => console.log(`Вопрос ${this.state.current}`, this.state.answers));
    } else {
      const index = answers.indexOf(value);

      if (index > -1) {
        answers.splice(index, 1);
      }

      answers.sort();
      this.setState({ answers }, () => console.log(`Вопрос ${this.state.current}`, this.state.answers));
    }
  }

  renderAnswers = () => {
    const { current } = this.state;
    const answers = questionsList[current].answers;

    const [
      answerId1,
      answerId2,
      answerId3,
      answerId4,
    ] = [
      `ans_1_${this.state.current}`,
      `ans_2_${this.state.current}`,
      `ans_3_${this.state.current}`,
      `ans_4_${this.state.current}`,
    ];

    return (
      <div className="question__answers">
        <div className="question__answer">
          <input
            className="question__checkbox"
            type="checkbox"
            id={answerId1}
            value="А"
            onChange={this.chooseAnswer}
          />
          <label
            className="question__label"
            htmlFor={answerId1}
          >{answers['А']}</label>
        </div>

        <div className="question__answer">
          <input
            className="question__checkbox"
            type="checkbox"
            id={answerId2}
            value="Б"
            onChange={this.chooseAnswer}
          />
          <label
            className="question__label"
            htmlFor={answerId2}
          >{answers['Б']}</label>
        </div>

        <div className="question__answer">
          <input
            className="question__checkbox"
            type="checkbox"
            id={answerId3}
            value="В"
            onChange={this.chooseAnswer}
          />
          <label
            className="question__label"
            htmlFor={answerId3}
          >{answers['В']}</label>
        </div>

        <div className="question__answer">
          <input
            className="question__checkbox"
            type="checkbox"
            id={answerId4}
            value="Г"
            onChange={this.chooseAnswer}
          />
          <label
            className="question__label"
            htmlFor={answerId4}
          >{answers['Г']}</label>
        </div>
      </div>
    );
  }

  render() {
    const { current } = this.state;

    return (
      <div className="flipbook__page flipbook__page--question">
        <div className="flipbook__content">
          <div className="flipbook__question question">
            <div className="question__text">
              {questionsList[current].text}
            </div>

            <form className="question__form" onSubmit={this.onFormSubmit}>
              {this.renderAnswers()}
              <div className="question__controls">
                <input type="submit" className="question__btn" value="Ответить" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
