function player(input) {
    let bestPlayer = '';
    let bestGoals = -1;
    let hattrick = false;

    for (let i = 0; i < input.length; i += 2) {
        const playerName = input[i];
        const playerGoals = Number(input[i + 1]);

        if (playerGoals > bestGoals) {
            bestPlayer = playerName;
            bestGoals = playerGoals;
            hattrick = playerGoals >= 3; 
        }
    }

    console.log(`${bestPlayer} is the best player!`);
    console.log(`He has scored ${bestGoals} goals${hattrick ? ' and made a hat-trick !!!' : '.'}`);
}

player(["Neymar", "2", "Ronaldo", "1", "Messi", "2"]);
