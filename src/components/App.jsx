import React, { Component } from 'react';
import Cover from './pages/Cover';
import Description from './pages/Description';
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
      width: 722,
      height: 500,
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

            <Description
              number={1}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={1}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={2}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={2}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={3}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={3}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={4}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={4}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={5}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={5}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={6}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={6}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={7}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={7}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={8}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={8}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={9}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={9}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={10}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
            <Question
              number={10}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <Description
              number={11}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
              errorState={this.state.errorState}
            />
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
