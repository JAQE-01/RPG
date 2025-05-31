export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function calculateDamage(baseDamage, modifiers) {
    return baseDamage + modifiers.reduce((total, modifier) => total + modifier, 0);
}

export function formatCharacterStats(stats) {
    return Object.entries(stats)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
}