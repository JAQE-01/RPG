// This file initializes the game, sets up event listeners, and starts the story generation process.

import { BattleSystem } from './components/BattleSystem.js';
import { CharacterCreation } from './components/CharacterCreation.js';
import { DecisionEngine } from './components/DecisionEngine.js';
import { StoryGenerator } from './components/StoryGenerator.js';
import { MainMenu } from './components/UI/MainMenu.js';
import { HUD } from './components/UI/HUD.js';

const battleSystem = new BattleSystem();
const characterCreation = new CharacterCreation();
const decisionEngine = new DecisionEngine();
const storyGenerator = new StoryGenerator();

function initGame() {
    // Render the main menu
    const mainMenu = new MainMenu();
    mainMenu.render();

    // Set up event listeners for menu options
    document.getElementById('start-game').addEventListener('click', startNewGame);
    document.getElementById('load-game').addEventListener('click', loadGame);
}

function startNewGame() {
    // Create a new character
    const character = characterCreation.createCharacter();
    
    // Start the story generation process
    const story = storyGenerator.generateStory(character);
    
    // Initialize the HUD
    const hud = new HUD(character);
    hud.render();

    // Start the decision-making process
    decisionEngine.startDecisionMaking(story);
}

function loadGame() {
    // Logic to load a saved game
    console.log('Load game functionality not implemented yet.');
}

// Initialize the game when the window loads
window.onload = initGame;