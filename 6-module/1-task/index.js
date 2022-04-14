/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
   
    this.elem = document.createElement('table');
    console.log(this.elem);

    this.elem.innerHTML = 
    ` <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
          </tr>
      </thead>
    `;

    let tableInnerHtml = rows.map (row => {
      let tableCellswithData = Object.values (row)
        .map(tdDataValue => `<td>${tdDataValue}</td>`).join('');
      return `
          <tr>
            ${tableCellswithData}
            <td><button>X</button></td>
          </tr>
      `;
    }).join('');

    this.elem.innerHTML += `
    <tbody>
      ${tableInnerHtml}
    <tbody>
    `;
    this.elem.addEventListener('click', (event) => this.xButtonClicked(event));

  };

  xButtonClicked (event){
    if (event.target.tagName != 'BUTTON')
      return;
 
    let tr = event.target.closest('tr');
    tr.remove();
  };
};
