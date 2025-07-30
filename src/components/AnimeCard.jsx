import React from 'react';

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card">
      <img src={anime.poster_url} alt={anime.title} />
      <h3>{anime.title}</h3>
      <p>Рейтинг: {anime.rating}</p>
      <button>Смотреть</button>
    </div>
  );
};

export default AnimeCard;
