import React, { Component } from 'react';
import Cover from './pages/Cover';
import Description from './pages/Description';
import Question from './pages/Question';

class App extends Component {
  /**
   * @param questionState
   * @type number
   * 0 - Начальное состояние00
   * 1 - Дан ответ / "Узнать ответ"
   * 2 - "Правильный ответ!" / "Неправильно!" / "Частично правильно"
   * 3 - Дополнительная информация по вопросу
   */
  state = {
    currentQuestion: 1,
    questionState: 0,
  }

  componentDidMount() {
    $('.flipbook').turn({
      width: 722,
      height: 500,
      gradients: true,
      autoCenter: true,
    });
  }

  handleAnswer = (question, answer, rightAnswers) => {
    console.log(question, `Твой ответ: ${answer}`, `Правильно: ${rightAnswers}`);
    this.setState({ questionState: 1 });
  }

  handleFindOut = (question) => {
    console.log(question, 'Я не знаю ответа!');
    this.setState({ questionState: 1 });
  }

  render() {
    return (
      <div className="flipbook-viewport">
        <div className="container">
          <div className="flipbook">
            <div className="flipbook__page flipbook__page--main">
              <Cover title="Под российской короной" />
            </div>

            <Description
              number={1}
              currentQuestion={this.state.currentQuestion}
              questionState={this.state.questionState}
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
            />
            <Question
              number={11}
              onAnswer={this.handleAnswer}
              onFindOut={this.handleFindOut}
            />

            <div className="flipbook__page flipbook__page--main">
              <div>Результаты...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
