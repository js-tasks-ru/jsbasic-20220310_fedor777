function makeDiagonalRed(table) {
  let allRows = table.rows;
  for (let rItem of allRows) {
       let rowCells = rItem.cells;
       for (let cellItem of rowCells) {
         if (rItem.sectionRowIndex === cellItem.cellIndex) {
            cellItem.style.backgroundColor = 'red';
         };
       };
  };
};

