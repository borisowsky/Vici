import React from 'react';

const Cover = (props) => {
  const renderRank = (score) => {
    if (score <= 3) {
      return 'Рядовой гренадёр';
    } else if ((score >= 4) && (score <= 6)) {
      return 'Сержат русской пехоты';
    } else if ((score >= 7) && (score <= 11)) {
      return 'Подпоручик Архангелогородского полка';
    }
  };

  return (
    <div className="flipbook__page flipbook__page--description">
      <div className="flipbook__content">
        <div className="flipbook__rank">
          Ваше звание: «{renderRank(props.score)}»
        </div>
        <button
          className="flipbook__restart btn btn--accent"
          onClick={() => { props.onRestart(); }}
        >Начать заново</button>
      </div>
    </div>
  );
};

export default Cover;
