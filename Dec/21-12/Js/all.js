// var tableData = [{
//         "S.No": 1,
//         "Name": "Raj1",
//         "FatherName": "Ram1",
//         "Section": "6th"
//     },
//     {
//         "S.No": 2,
//         "Name": "Raj2",
//         "FatherName": "Ram2",
//         "Section": "7th"
//     },
//     {
//         "S.No": 3,
//         "Name": "Raj3",
//         "FatherName": "Ram3",
//         "Section": "8th"
//     },
//     {
//         "S.No": 4,
//         "Name": "Raj4",
//         "FatherName": "Ram4",
//         "Section": "9th"
//     },
//     {
//         "S.No": 5,
//         "Name": "Raj5",
//         "FatherName": "Ram5",
//         "Section": "10th"
//     }
// ]

// var result1 = tableData[2].Name;
// var result2 = tableData[3].Name;
// var result3 = result1.concat(result2);
// console.log(result3);

var student = '{"S.No": 1,"Name": "Raj1","FatherName": "Ram1","Section": "6th"}'
var obj = JSON.parse(student);
console.log(obj);

var student = {"S.No": 1,"Name": "Raj1","FatherName": "Ram1","Section": "6th"};
var obj = JSON.stringify(student);
console.log(obj);