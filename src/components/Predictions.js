import React, { useEffect, useState } from 'react';
import './css/App.css';
import Game from './Game';
import data from '../today.json';

function Predictions() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const arr = Object.values(data);
    console.log(arr);
    setGames(arr);
  }, []); // Empty dependency array ensures this runs only once
  
  if (Object.keys(data).length === 0) {
    console.log('No games today');
    return (
      <div>
        <h1>No games today</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Games</h1>
      {games.map((game, index) => (
        <Game
          key={index}
          homeTeam={game.home_team_name}
          homeLogo={game.home_team_logo}
          homePercentage={Math.round(game.prediction * 100, 2)}
          awayTeam={game.away_team_name}
          awayLogo={game.away_team_logo}
          awayPercentage={Math.round((1 - game.prediction) * 100, 2)}
        />
      ))}
    </div>
  );
}

export default Predictions;