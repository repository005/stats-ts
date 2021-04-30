import { MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0][0];

console.log(dateOfFirstMatch);

// let manUnitedWins = 0;

// for (let match of reader.data) {
//   if (
//     (match[1] === 'Man United' && match[5] === MastchResult.HomeWin) ||
//     (match[2] === 'Man United' && match[5] === MastchResult.AwayWin)
//   ) {
//     ++manUnitedWins;
//   }
// }

// console.log(manUnitedWins);
