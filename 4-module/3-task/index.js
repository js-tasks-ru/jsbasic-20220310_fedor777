function highlight(table) {
    let tBody = table.querySelector('tbody');
    let tBodyRows = tBody.rows;
    for (let rowItem of tBodyRows){
      let cellsInRow = rowItem.cells;
      for (let cellItem of cellsInRow) {
        if (cellItem.cellIndex === 3) {
          if (cellItem.getAttribute('data-available') === 'true'){

            rowItem.classList.add('available');
          } else if (cellItem.getAttribute('data-available') === 'false') {
            rowItem.classList.add('unavailable');
          };
          if (cellItem.hasAttribute('data-available') === false) {
            rowItem.hidden = true;
          };
        };
        if (cellItem.cellIndex === 2){
            if (cellItem.innerText === 'm') {
              rowItem.classList.add('male');
            } else if (cellItem.innerText === 'f'){
              rowItem.classList.add('female');
            };
        };
        if (cellItem.cellIndex === 1 && cellItem.innerText < 18) {
          rowItem.style = "text-decoration: line-through";
        };
      }
    };
};


