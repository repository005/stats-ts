import fs from 'fs';
import { dateStringToDate } from './utils';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[] ): any => {
        return [
          dateStringToDate(row[0])
          //ADD OTHER 
        ]
      })
  }
}