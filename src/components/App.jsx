import React, { Component } from 'react';
import Cover from './pages/Cover';
import Pictures from './pages/Pictures';
import Question from './pages/Question';
import Results from './pages/Results';
import Content from './pages/Content';
import Guide from './Guide';
import questionsList from '../questions.json';

class App extends Component {
  /**
   * @param questionState
   * @type number
   * 0 - Начальное состояние
   * 1 - "Узнать ответ"
   * 2 - "Правильный ответ!"
   * 3 - "Неправильно!"
   * 4 - "Частично правильно"
   * 5 - Дополнительная информация по вопросу
   */
  state = {
    currentQuestion: 0,
    questionState: 0,
    errorState: 0,
    score: 0,
  }

  componentDidMount() {
    $('.flipbook').turn({
      gradients: true,
      width: 1040,
      height: 700,
      autoCenter: true,
      duration: 1000,
    });

    $('.flipbook').bind('turning', (event, page) => {
      setTimeout(() => {
        this.setState({ questionState: (page === 2) ? -1 : 0 });
      }, 500);
    });
  }

  switchToLastStep = (delay, question) => {
    const questionToShow = question + 1;

    setTimeout(() => {
      if (questionsList[questionToShow].hint) {
        this.setState({ questionState: 5 }, () => {
          setTimeout(() => {
            this.setState({ questionState: 0 });
          }, delay * 3);
        });
      } else {
        this.setState({ questionState: 0 });
      }
    }, delay);
  }

  handleAnswer = (question, answer, rightAnswer) => {
    if (answer.length === 0) {
      this.setState({ errorState: 1 });
    } else if ((answer.length === 1) && (rightAnswer.length > 1)) {
      this.setState({ errorState: 2 });
    } else if (answer.toString() === rightAnswer.toString()) {
      this.setState({
        questionState: 2,
        errorState: 0,
        score: this.state.score + 1,
        currentQuestion: this.state.currentQuestion + 1,
      });

      this.switchToLastStep(3000, this.state.currentQuestion);
    } else {
      let includes = false;
      answer.forEach((element) => {
        if (rightAnswer.includes(element)) {
          includes = true;
        }
      }, this);

      this.setState({
        questionState: (includes ? 4 : 3),
        errorState: 0,
        currentQuestion: this.state.currentQuestion + 1,
      });

      this.switchToLastStep(3000, this.state.currentQuestion);
    }
  }

  handleFindOut = () => {
    this.setState({
      questionState: 1,
      errorState: 0,
      currentQuestion: this.state.currentQuestion + 1,
    });
  }

  render() {
    return (
      <div>
        <Guide
          questionState={this.state.questionState}
          errorState={this.state.errorState}
          questionNumber={this.state.currentQuestion}
        />

        <div className="container">
          <div className="flipbook">
            <div className="flipbook__page flipbook__page--main hard">
              <Cover />
            </div>
            <div className="flipbook__page flipbook__page--hard flipbook__page--hard-inside hard" />

            <Content />

            <Pictures number={1} />
            <Question
              number={1}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={2} />
            <Question
              number={2}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={3} />
            <Question
              number={3}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={4} />
            <Question
              number={4}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={5} />
            <Question
              number={5}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={6} />
            <Question
              number={6}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={7} />
            <Question
              number={7}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={8} />
            <Question
              number={8}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={9} />
            <Question
              number={9}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={10} />
            <Question
              number={10}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Pictures number={11} />
            <Question
              number={11}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Results score={this.state.score} />
            <div className="flipbook__page flipbook__page--hard-inside hard" />
            <div className="flipbook__page flipbook__page--hard-inside hard" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
