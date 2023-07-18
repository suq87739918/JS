'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusian Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Question 1:
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}
//or
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//Question 2: cal average odd
let sumOdds = 0;
let count = 0;
for (let odd in game.odds) {
  sumOdds += game.odds[odd];
  count++;
}
let averageOdds = sumOdds / count;
console.log(`the average odds is: ${averageOdds}`);
//or
// Question 2: Calculate average odds
let sumOdds2 = 0;
const oddsValues = Object.values(game.odds);
for (let odd of oddsValues) {
  sumOdds2 += odd;
}
let averageOdds2 = sumOdds / oddsValues.length;
console.log(`The average odds is: ${averageOdds2}`);

//Question 3:
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} is: ${odd}`);
}
