import React from 'react';

const HUD = ({ character }) => {
    return (
        <div className="hud">
            <div className="character-stats">
                <h2>{character.name}</h2>
                <p>Health: {character.health}</p>
                <p>Mana: {character.mana}</p>
                <p>Level: {character.level}</p>
                <p>Experience: {character.experience}</p>
            </div>
            <div className="abilities">
                <h3>Abilities</h3>
                <ul>
                    {character.abilities.map((ability, index) => (
                        <li key={index}>{ability.name} - {ability.cooldown} sec cooldown</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HUD;