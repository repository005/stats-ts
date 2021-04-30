import fs from 'fs';

export abstract class CsvFileReaderAbstract<TypeOfData> {
  data: string[];
  abstract mapRow(row: string[]): TypeOfData;

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
