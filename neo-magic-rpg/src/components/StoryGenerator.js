class StoryGenerator {
    constructor(playerCharacter) {
        this.playerCharacter = playerCharacter;
        this.storyElements = [];
    }

    generateStory() {
        this.storyElements.push(this.introduceCharacter());
        this.storyElements.push(this.createConflict());
        this.storyElements.push(this presentChoices());
        this.storyElements.push(this.resolveConflict());
        return this.storyElements.join(' ');
    }

    introduceCharacter() {
        return `In a world filled with magic and mystery, ${this.playerCharacter.name}, a ${this.playerCharacter.race}, embarks on an epic journey.`;
    }

    createConflict() {
        const conflicts = [
            "A dark sorcerer threatens the peace of the realm.",
            "A powerful artifact has been stolen from the royal vault.",
            "A mysterious plague is spreading across the land."
        ];
        const randomConflict = conflicts[Math.floor(Math.random() * conflicts.length)];
        return `Suddenly, ${randomConflict}`;
    }

    presentChoices() {
        const choices = [
            "Will you confront the sorcerer head-on?",
            "Will you seek the help of the ancient guardians?",
            "Will you investigate the source of the plague?"
        ];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return `You must decide: ${randomChoice}`;
    }

    resolveConflict() {
        return "Your choices will shape the fate of the world.";
    }
}

export default StoryGenerator;