
import React, { useState } from 'react';
import "./addplayers.css"

function AddPlayers() {
  const [showPlayerForm, setShowPlayerForm] = useState(false);

  const [players, setPlayers] = useState([]);

  const [formData, setFormData] = useState({
    playerName: '',
    playerImage: '',
    backgroundColor: '#ffffff',
    wickets: 0,
    runs: 0,
    totalMatches: 0,
  });

  const handleAddPlayerClick = () => {
    setShowPlayerForm(true);

  };

  const handleInputChange = (e) => {

    setFormData({ ...formData, [e.target.id]: e.target.value });
  
  };

  
  const handleColorChange = (color) => {
  
    setFormData({ ...formData, backgroundColor: color.hex });
  
  };

  const handleSubmit = () => {
    
    setPlayers([...players, formData]);

  
    setFormData({
      playerName: '',
      playerImage: '',
      backgroundColor: '#ffffff',
      wickets: 0,
      runs: 0,
      totalMatches: 0,
    });

    setShowPlayerForm(false);
  };

 
  return (
   
   <div className="app">
   
      <button onClick={handleAddPlayerClick}>Add Player</button>

   {showPlayerForm && (
        <div className="player-form">
          <label htmlFor="playerName">Player Name:</label>
          <input
            type="text"
            id="playerName"
            value={formData.playerName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="playerImage">Player Image URL:</label>
          <input
            type="text"
            id="playerImage"
            value={formData.playerImage}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="backgroundColor">Background Color:</label>
          <input
            type="color"
            id="backgroundColor"
            value={formData.backgroundColor}
            onChange={(e) => handleColorChange(e)}
          />

          <label htmlFor="wickets">Wickets:</label>
          <input
            type="number"
            id="wickets"
            value={formData.wickets}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="runs">Runs:</label>
          <input
            type="number"
            id="runs"
            value={formData.runs}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="totalMatches">Total Matches:</label>
          <input
            type="number"
            id="totalMatches"
            value={formData.totalMatches}
            onChange={handleInputChange}
            required
          />

          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      <ul className="players-list">
        {players.map((player, index) => (
          <li key={index} className="player-item" style={{ backgroundColor: player.backgroundColor }}>
            <img src={player.playerImage} alt={player.playerName} width="50" />
            <h3>{player.playerName}</h3>
            <p>Wickets: {player.wickets}</p>
            <p>Runs: {player.runs}</p>
            <p>Total Matches: {player.totalMatches}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddPlayers;
