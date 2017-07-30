import React, { Component } from 'react';
import Cover from './pages/Cover';
import Description from './pages/Description';
import Question from './pages/Question';
import Results from './pages/Results';
import Content from './pages/Content';

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
    currentQuestion: 1,
    questionState: 0,
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
  }

  handleAnswer = (question, answer, rightAnswer) => {
    if (answer.length === 0) {
      // TODO: Handle 0 answers
      alert('Answer something please');
    } else if ((answer.length === 1) && (rightAnswer.length > 1)) {
      // TODO: Handle when you need to answer one more
      alert('One more answer please');
    } else if (answer.toString() === rightAnswer.toString()) {
      this.setState({
        questionState: 2,
        score: this.state.score + 1,
      });
    } else {
      let includes = false;
      answer.forEach((element) => {
        if (rightAnswer.includes(element)) {
          includes = true;
        }
      }, this);

      this.setState({ questionState: (includes ? 4 : 3) });
    }
  }

  handleFindOut = (question) => {
    // TODO: Handle findOut
    this.setState({
      questionState: 1,
    });
  }

  render() {
    return (
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

          <Results score={this.state.score} />
          <div className="flipbook__page flipbook__page--hard-inside hard" />
          <div className="flipbook__page flipbook__page--hard-inside hard" />
        </div>
      </div>
    );
  }
}

export default App;
