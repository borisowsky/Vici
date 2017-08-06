import React from 'react';
import pointer from '../../assets/img/pointer.png';

const Cover = () => (
  <div className="flipbook__page flipbook__page--question">
    <div className="flipbook__content">
      <div className="flipbook__center">
        Чтобы начать игру или перейти на следующий вопрос после вашего ответа, перелестните страницу.
      </div>
      <img className="flipbook__pointer" src={pointer} alt="Указатель" />
    </div>
  </div>
);

export default Cover;
