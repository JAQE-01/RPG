class CharacterCreation {
    constructor() {
        this.character = {
            name: '',
            race: '',
            traits: [],
            stats: {
                strength: 0,
                agility: 0,
                intelligence: 0,
                charisma: 0
            }
        };
    }

    setName(name) {
        this.character.name = name;
    }

    selectRace(race) {
        this.character.race = race;
    }

    addTrait(trait) {
        this.character.traits.push(trait);
    }

    setStats(stats) {
        this.character.stats = { ...this.character.stats, ...stats };
    }

    getCharacter() {
        return this.character;
    }
}

export default CharacterCreation;