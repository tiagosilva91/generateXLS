const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Dados User');

const data = [
    {
       "name":"Tiago",
       "email":"tiago@gmail.com",
       "id":"1234567890",
       "created_at":"2022-08-12T00:00:00Z",
       "skills":"Dados de skills",
       "cpf": "12345678900",
       "rg":"1234567"
    },
    {
       "name":"Pessoa 2",
       "email":"pessoa@gmail.com",
       "id":"1234567891",
       "created_at":"2022-08-12T00:00:00Z",
       "skills":"Dados de skills",
       "cpf": "12345678911",
       "rg":"1234569"
    }
   ];

   const ColumnNames = [
    "Name",
    "Email",
    "Id",
    "Created_at",
    "Skills",
    "CPF",
    "RG"
]

let ColumnIndex = 1;
ColumnNames.forEach(item =>{
    ws.cell(1, ColumnIndex++).string(item)
})

let rowIndex = 2;
data.forEach( record => {
    let columnIndex = 1;
    Object.keys(record).forEach(columnName =>{
        ws.cell(rowIndex,columnIndex++)
            .string(record [columnName])
    });
    rowIndex++;
}); 

wb.write('Dados.xlsx');

