import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MastchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

console.log(reader.data);


let manUnitedWins = 0;

for (let match of reader.data) {
  if (
    (match[1] === 'Man United' && match[5] === MastchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MastchResult.AwayWin)
  ) {
    ++manUnitedWins;
  }
}

// console.log(manUnitedWins);
