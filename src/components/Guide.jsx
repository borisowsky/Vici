import React, { Component } from 'react';
import questionsList from '../questions.json';
import bolotov from '../assets/img/bolotov.jpg';

export default class Guide extends Component {
  renderGuideMessage = () => {
    let errorMessage = '';
    let questionMessage = '';

    switch (this.props.errorState) {
      case 1:
        errorMessage = 'Пожалуйста, дайте ответ';
        break;

      case 2:
        errorMessage = 'Выберите ещё один вариант ответа';
        break;

      case 0:
      default:
        errorMessage = '';
        break;
    }

    switch (this.props.questionState) {
      case -1:
        questionMessage = `Здравствуйте! Я – поручик Архангелогородского полка Андрей Тимофеевич Болотов.
        После вступления войск наших в королевство Прусское и занятия города Кёнигсберга служил я в канцелярии
        российских губернаторов`;
        break;

      case 1:
        questionMessage = 'Вы пропускаете ход';
        break;

      case 2:
        questionMessage = 'Поздравляю! Это – правильный ответ';
        break;

      case 3:
        questionMessage = 'Извините, вы ошиблись. Попробуйте найти ответ на следующий вопрос';
        break;

      case 4:
        questionMessage = 'Извините, вы были близки к правильному ответу, но ошиблись';
        break;

      case 5:
        questionMessage = questionsList[this.props.questionNumber].hint;
        break;

      case 0:
      default:
        questionMessage = '';
        break;
    }

    if (this.props.errorState !== 0 || this.props.questionState !== 0) {
      return (
        <div ref={(node) => { this.messageEl = node; }} className="guide__message">
          {this.props.errorState ? errorMessage : questionMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="guide">
        {this.renderGuideMessage()}
        <img src={bolotov} className="guide__face" alt="Андрей Тимофеевич Болотов" />
      </div>
    );
  }
}
