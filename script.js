
/*
["fine", "Hello", "I'm", "there"]
["a", "B", "C", "d"]
*/
let input_1 =  [-3,4,3,90]
function some(yourType, opponentType, attack, defense){
    let effectiveness;

    if (yourType === 'fire') {
        if (opponentType === 'water') {
            effectiveness = 0.5;
        } else if (opponentType === 'grass') {
            effectiveness = 0.5;
        } else if (opponentType === 'electric') {
            effectiveness = 1;
        } else if (opponentType === 'fire') {
            effectiveness = 0.5;
        } else {
            effectiveness = 0.5;
        }
    } else if (yourType === 'water') {
        if (opponentType === 'grass') {
            effectiveness = 0.5;
        } else if (opponentType === 'electric') {
            effectiveness = 0.5;
        } else if (opponentType === 'fire') {
            effectiveness = 2;
        } else if (opponentType === 'water') {
            effectiveness = 0.5;
        } else {
            effectiveness = 0.5;
        }
    } else if (yourType === 'grass') {
        if (opponentType === 'electric') {
            effectiveness = 1;
        } else if (opponentType === 'water') {
            effectiveness = 2;
        } else if (opponentType === 'fire') {
            effectiveness = 0.5;
        } else if (opponentType === 'grass') {
            effectiveness = 0.5;
        } else {
            effectiveness = 0.5;
        }
    } else if (yourType === 'electric') {
        if (opponentType === 'fire') {
            effectiveness = 1;
        } else if (opponentType === 'water') {
            effectiveness = 2;
        } else if (opponentType === 'grass') {
            effectiveness = 1;
        } else if (opponentType === 'electric') {
            effectiveness = 0.5;
        } else {
            effectiveness = 0.5;
        }
    }

    return 50 * (attack / defense) * effectiveness;
}

console.log(some("grass", "water", 100, 100))

