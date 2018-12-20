// var testData = {
//     "glossary": {
//         "title": "example glossary",
//         "GlossDiv": {
//             "title": "S",
//             "GlossList": {
//                 "GlossEntry": {
//                     "ID": "SGML",
//                     "SortAs": "SGML",
//                     "GlossTerm": "Standard Generalized Markup Language",
//                     "Acronym": "SGML",
//                     "Abbrev": "ISO 8879:1986",
//                     "GlossDef": {
//                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
//                         "GlossSeeAlso": ["GML", "XML"]
//                     },
//                     "GlossSee": "markup"
//                 }
//             }
//         }
//     }
// }
// console.log(testData.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso[0]);

// var testData = {
//     "menu": {
//         "header": "SVG Viewer",
//         "items": [{
//                 "id": "Open"
//             },
//             {
//                 "id": "OpenNew",
//                 "label": "Open New"
//             },
//             null,
//             {
//                 "id": "ZoomIn",
//                 "label": "Zoom In"
//             },
//             {
//                 "id": "ZoomOut",
//                 "label": "Zoom Out"
//             },
//             {
//                 "id": "OriginalView",
//                 "label": "Original View"
//             },
//             null, {
//                 "id": "Quality"
//             },
//             {
//                 "id": "Pause"
//             },
//             {
//                 "id": "Mute"
//             },
//             null,
//             {
//                 "id": "Find",
//                 "label": "Find..."
//             },
//             {
//                 "id": "FindAgain",
//                 "label": "Find Again"
//             },
//             {
//                 "id": "Copy"
//             },
//             {
//                 "id": "CopyAgain",
//                 "label": "Copy Again"
//             },
//             {
//                 "id": "CopySVG",
//                 "label": "Copy SVG"
//             },
//             {
//                 "id": "ViewSVG",
//                 "label": "View SVG"
//             },
//             {
//                 "id": "ViewSource",
//                 "label": "View Source"
//             },
//             {
//                 "id": "SaveAs",
//                 "label": "Save As"
//             },
//             null,
//             {
//                 "id": "Help"
//             },
//             {
//                 "id": "About",
//                 "label": "About Adobe CVG Viewer..."
//             }
//         ]
//     }
// }
// // console.log(testData.menu.items[15].id);
// console.log(testData.menu.items[2]);
// console.log(testData.menu.items[21].label);
// // var testData = [
//     {
//         "S.No":1,
//         "name":"Raj1",
//         "FatherName":"Ram1",
//         "Section":"6th"
//     },
//     {
//         "S.No":2,
//         "name":"Raj2",
//         "FatherName":"Ram2",
//         "Section":"7th"
//     },
//     {
//         "S.No":3,
//         "name":"Raj3",
//         "FatherName":"Ram3",
//         "Section":"8th"
//     },
//     {
//         "S.No":4,
//         "name":"Raj4",
//         "FatherName":"Ram4",
//         "Section":"9th"
//     },
//     {
//         "S.No":5,
//         "name":"Raj5",
//         "FatherName":"Ram5",
//         "Section":"10th"
//     }
// ]
// console.log(testData[2].FatherName);

// var testData = {
//     "id": "0001",
//     "type": "donut",
//     "name": "Cake",
//     "ppu": 0.55,
//     "batters": {
//         "batter": [{
//                 "id": "1001",
//                 "type": "Regular"
//             },
//             {
//                 "id": "1002",
//                 "type": "Chocolate"
//             },
//             {
//                 "id": "1003",
//                 "type": "Blueberry"
//             },
//             {
//                 "id": "1004",
//                 "type": "Devil's Food"
//             }
//         ]
//     },
//     "topping": [{
//             "id": "5001",
//             "type": "None"
//         },
//         {
//             "id": "5002",
//             "type": "Glazed"
//         },
//         {
//             "id": "5005",
//             "type": "Sugar"
//         },
//         {
//             "id": "5007",
//             "type": "Powdered Sugar"
//         },
//         {
//             "id": "5006",
//             "type": "Chocolate with Sprinkles"
//         },
//         {
//             "id": "5003",
//             "type": "Chocolate"
//         },
//         {
//             "id": "5004",
//             "type": "Maple"
//         }
//     ]
// }
// console.log(testData.batters.batter[2].id);
// console.log(testData.topping[3].id);

function checkData(){
    var a = 0.5;
    if (a>1){
        alert("Success");
    }
    else alert("Fail");
}