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
   * 6 - Оглашение результатов
   */
  state = {
    currentQuestion: 0,
    questionState: 0,
    errorState: 0,
    score: 0,
    answeredQuestions: [],
    readyForNext: true,
    resetAnswers: false,
    messageDelay: 3000,
    hintDelay: 8500,
  }

  componentDidMount() {
    $('.flipbook').turn({
      gradients: true,
      width: 1248,
      height: 840,
      autoCenter: true,
      duration: 1000,
    });

    $('.flipbook').bind('turning', (e, page) => {
      if ([3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25].includes(page)) {
        // Cannot flip to previous page
        e.preventDefault();
      }

      if (page === 4) {
        this.setState({ readyForNext: false });
      }

      if (this.state.answeredQuestions.includes(this.state.currentQuestion)) {
        this.setState({ readyForNext: false });
      }

      setTimeout(() => {
        this.setState({ questionState: (page === 2) ? -1 : 0 });
      }, 500);
    });

    $('.flipbook').bind('turned', (e, page) => {
      if (page === 26) {
        this.setState({ questionState: 6 });
      }
    });
  }

  componentDidUpdate = () => {
    if (!this.state.readyForNext) {
      $('.flipbook').turn('disable', true);
    } else {
      $('.flipbook').turn('disable', false);
    }
  }

  switchToLastStep = (delay, question) => {
    const questionToShow = question + 1;

    this.setState({ readyForNext: false }, () => {
      setTimeout(() => {
        if (questionsList[questionToShow].hint) {
          this.setState({ questionState: 5 }, () => {
            setTimeout(() => {
              this.setState({
                questionState: 0,
                readyForNext: true,
              });
            }, this.state.hintDelay);
          });
        } else {
          this.setState({
            questionState: 0,
            readyForNext: true,
          });
        }
      }, delay);
    });
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
        answeredQuestions: [...this.state.answeredQuestions, this.state.currentQuestion + 1],
      });

      this.switchToLastStep(this.state.messageDelay, this.state.currentQuestion);
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
        answeredQuestions: [...this.state.answeredQuestions, this.state.currentQuestion + 1],
      });

      this.switchToLastStep(this.state.messageDelay, this.state.currentQuestion);
    }
  }

  handleFindOut = () => {
    this.setState({
      questionState: 1,
      errorState: 0,
      currentQuestion: this.state.currentQuestion + 1,
      answeredQuestions: [...this.state.answeredQuestions, this.state.currentQuestion + 1],
    });

    this.switchToLastStep(this.state.messageDelay, this.state.currentQuestion);
  }

  restart = () => {
    this.setState({
      currentQuestion: 0,
      questionState: 0,
      errorState: 0,
      score: 0,
      answeredQuestions: [],
      readyForNext: true,
      resetAnswers: true,
    }, () => {
      this.setState({ resetAnswers: false });
      $('.flipbook').turn('page', 2).turn('page', 1);
    });
  }

  render() {
    return (
      <div>
        <Guide
          questionState={this.state.questionState}
          errorState={this.state.errorState}
          questionNumber={this.state.currentQuestion}
          score={this.state.score}
        />

        <div className="container">
          <div className="flipbook">
            <div className="flipbook__page flipbook__page--main hard">
              <Cover />
            </div>
            <div className="flipbook__page flipbook__page--hard flipbook__page--hard-inside hard" />

            <Content />

            <Pictures number={1} wasAnswered={this.state.answeredQuestions.includes(1)} />
            <Question
              number={1}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(1)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={2} wasAnswered={this.state.answeredQuestions.includes(2)} />
            <Question
              number={2}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(2)}
            />

            <Pictures number={3} wasAnswered={this.state.answeredQuestions.includes(3)} />
            <Question
              number={3}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(3)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={4} wasAnswered={this.state.answeredQuestions.includes(4)} />
            <Question
              number={4}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(4)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={5} wasAnswered={this.state.answeredQuestions.includes(5)} />
            <Question
              number={5}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(5)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={6} wasAnswered={this.state.answeredQuestions.includes(6)} />
            <Question
              number={6}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(6)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={7} wasAnswered={this.state.answeredQuestions.includes(7)} />
            <Question
              number={7}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(7)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={8} wasAnswered={this.state.answeredQuestions.includes(8)} />
            <Question
              number={8}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(8)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={9} wasAnswered={this.state.answeredQuestions.includes(9)} />
            <Question
              number={9}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(9)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={10} wasAnswered={this.state.answeredQuestions.includes(10)} />
            <Question
              number={10}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(10)}
              resetAnswers={this.state.resetAnswers}
            />

            <Pictures number={11} wasAnswered={this.state.answeredQuestions.includes(11)} />
            <Question
              number={11}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
              currentQuestion={this.state.currentQuestion}
              wasAnswered={this.state.answeredQuestions.includes(11)}
              resetAnswers={this.state.resetAnswers}
            />

            <Results score={this.state.score} onRestart={this.restart} />
            <div className="flipbook__page flipbook__page--hard-inside hard" />
            <div className="flipbook__page flipbook__page--hard-inside hard" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
