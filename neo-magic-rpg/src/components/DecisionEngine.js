class DecisionEngine {
    constructor(storyState) {
        this.storyState = storyState;
        this.options = [];
    }

    addOption(option) {
        this.options.push(option);
    }

    presentOptions() {
        console.log("Choose an option:");
        this.options.forEach((option, index) => {
            console.log(`${index + 1}: ${option.description}`);
        });
    }

    analyzeChoice(choiceIndex) {
        if (choiceIndex < 0 || choiceIndex >= this.options.length) {
            console.log("Invalid choice. Please try again.");
            return;
        }

        const selectedOption = this.options[choiceIndex];
        this.storyState = selectedOption.consequence(this.storyState);
        console.log(selectedOption.resultMessage);
    }

    getCurrentState() {
        return this.storyState;
    }
}

export default DecisionEngine;