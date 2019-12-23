import { Row, CompareTableClass, Cell, CellType } from '../types/tableTypes';
import { generateRandom } from '../utils/GenerateRandom';
import { oneCellFactory } from './oneCellFactory';

export const oneRowFactory = (instance: CompareTableClass): Row => {
  const cells: Cell[] = [];

  const row = {
    head: {
      name: '比較ポイント',
      type: CellType.TEXT
    },
    cells,
    rowKey: generateRandom()
  };

  instance.data.header.forEach(oneHeader => {
    row.cells.push(oneCellFactory(row, oneHeader.comparingItemKey));
  });

  return row;
};
