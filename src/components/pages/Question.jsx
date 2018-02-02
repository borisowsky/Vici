import React, { Component } from 'react';
import questionsList from '../../questions.json';

class Question extends Component {
  state = {
    current: this.props.number,
    answers: [],
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.resetAnswers) {
      this.setState({ answers: [] }, () => {
        this.checkBox1.checked = false;
        this.checkBox2.checked = false;
        this.checkBox3.checked = false;
        this.checkBox4.checked = false;
      });
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const { answers, current } = this.state;
    const { rightAnswers } = questionsList[current];

    this.props.onAnswer(this.state.current, answers, rightAnswers);
  }

  chooseAnswer = (e) => {
    const { checked, value } = e.target;
    let { answers } = this.state;

    if (checked) {
      answers = [...answers, value];
      answers.sort();
      this.setState({ answers });
    } else {
      const index = answers.indexOf(value);

      if (index > -1) {
        answers.splice(index, 1);
      }

      answers.sort();
      this.setState({ answers });
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
      `ans_${this.state.current}_1`,
      `ans_${this.state.current}_2`,
      `ans_${this.state.current}_3`,
      `ans_${this.state.current}_4`,
    ];

    const { rightAnswers } = questionsList[this.state.current];

    return (
      <div className="question__answers">
        <div className="question__answer">
          <input
            ref={(node) => { this.checkBox1 = node; }}
            className="question__checkbox"
            type="checkbox"
            id={answerId1}
            value="А"
            onChange={this.chooseAnswer}
            disabled={this.props.wasAnswered}
          />
          <label
            className={(rightAnswers.includes('А') && this.props.wasAnswered) ?
              'question__label question__label--right' :
              'question__label'
            }
            htmlFor={answerId1}
          ><b>А.</b> {answers['А']}</label>
        </div>

        <div className="question__answer">
          <input
            ref={(node) => { this.checkBox2 = node; }}
            className="question__checkbox"
            type="checkbox"
            id={answerId2}
            value="Б"
            onChange={this.chooseAnswer}
            disabled={this.props.wasAnswered}
          />
          <label
            className={(rightAnswers.includes('Б') && this.props.wasAnswered) ?
              'question__label question__label--right' :
              'question__label'
            }
            htmlFor={answerId2}
          ><b>Б.</b> {answers['Б']}</label>
        </div>

        <div className="question__answer">
          <input
            ref={(node) => { this.checkBox3 = node; }}
            className="question__checkbox"
            type="checkbox"
            id={answerId3}
            value="В"
            onChange={this.chooseAnswer}
            disabled={this.props.wasAnswered}
          />
          <label
            className={(rightAnswers.includes('В') && this.props.wasAnswered) ?
              'question__label question__label--right' :
              'question__label'
            }
            htmlFor={answerId3}
          ><b>В.</b> {answers['В']}</label>
        </div>

        <div className="question__answer">
          <input
            ref={(node) => { this.checkBox4 = node; }}
            className="question__checkbox"
            type="checkbox"
            id={answerId4}
            value="Г"
            onChange={this.chooseAnswer}
            disabled={this.props.wasAnswered}
          />
          <label
            className={(rightAnswers.includes('Г') && this.props.wasAnswered) ?
              'question__label question__label--right' :
              'question__label'
            }
            htmlFor={answerId4}
          ><b>Г.</b> {answers['Г']}</label>
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
              <div>Вопрос {this.state.current}.</div>
              <br />
              <div className="question__desc">{questionsList[current].text}</div>
            </div>

            <form className="question__form" onSubmit={this.onFormSubmit}>
              {this.renderAnswers()}
              <div className="question__controls">
                <input
                  type="submit"
                  className="question__btn btn btn--accent"
                  value="Ответить"
                  disabled={this.props.wasAnswered}
                />

                <button
                  type="button"
                  className="question__btn btn"
                  onClick={() => { this.props.onFindOut(current); }}
                  disabled={this.props.wasAnswered}
                >Узнать ответ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
