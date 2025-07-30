import React, { useState, useEffect } from 'react';
import AnimeCard from './components/AnimeCard';
import './styles/global.css';

function App() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await fetch('http://localhost:8000/api/anime/1');
      const data = await response.json();
      setAnimeList([data]);
    };
    fetchAnime();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Аниме Каталог</h1>
      </header>
      <div className="anime-grid">
        {animeList.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default App;
