import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

// const csvReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvReader);
// matchReader.load();

const matchReader = MatchReader.loadByCsv('football.csv');

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
