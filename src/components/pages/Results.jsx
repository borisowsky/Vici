import React from 'react';

const Cover = props => (
  <div className="flipbook__page flipbook__page--description">
    <div className="flipbook__content">
      Вы ответили на {props.score} из 11 вопросов!
      <button
        className="flipbook__restart btn btn--accent"
        onClick={() => { props.onRestart(); }}
      >Начать заново</button>
    </div>
  </div>
);

export default Cover;
