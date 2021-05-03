import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const csvReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvReader);
matchReader.load();


