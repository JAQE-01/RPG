import React from 'react';

const MainMenu = ({ onStartNewGame, onLoadGame, onSettings }) => {
    return (
        <div className="main-menu">
            <h1>Neo Magic RPG</h1>
            <button onClick={onStartNewGame}>Start New Game</button>
            <button onClick={onLoadGame}>Load Game</button>
            <button onClick={onSettings}>Settings</button>
        </div>
    );
};

export default MainMenu;