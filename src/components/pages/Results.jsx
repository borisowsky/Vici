import React from 'react';

const Cover = props => (
  <div className="flipbook__page flipbook__page--description">
    Вы ответили на {props.score} из 11 вопросов!
  </div>
);

export default Cover;
