class BattleSystem {
    constructor() {
        this.playerHealth = 100;
        this.enemyHealth = 100;
        this.playerAbilities = [];
        this.enemyAbilities = [];
    }

    calculateDamage(attacker, defender) {
        const baseDamage = attacker.attack - defender.defense;
        return baseDamage > 0 ? baseDamage : 0;
    }

    performAttack(attacker, defender) {
        const damage = this.calculateDamage(attacker, defender);
        defender.health -= damage;
        return damage;
    }

    checkBattleOutcome() {
        if (this.playerHealth <= 0) {
            return 'Player has been defeated!';
        } else if (this.enemyHealth <= 0) {
            return 'Enemy has been defeated!';
        }
        return 'Battle is ongoing';
    }

    applyInjuryEffects(character) {
        if (character.health < 50) {
            character.attack *= 0.8; // Reduce attack power if health is below 50
        }
    }

    battleTurn(playerAction, enemyAction) {
        const playerDamage = this.performAttack(playerAction, enemyAction);
        this.applyInjuryEffects(enemyAction);
        
        const enemyDamage = this.performAttack(enemyAction, playerAction);
        this.applyInjuryEffects(playerAction);

        return {
            playerDamage,
            enemyDamage,
            outcome: this.checkBattleOutcome()
        };
    }
}

export default BattleSystem;