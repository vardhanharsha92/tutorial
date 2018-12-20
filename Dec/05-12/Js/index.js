// function parameters(){
//     var result = document.getElementById("demo").innerWidth;
//     console.log(result);
// }

// var a = document.getElementsByTagName("p");
// console.log(a);

// function test(){
//     var para = document.createElement("p");
//     var paraText = document.createTextNode("Hello This is Paragraph");
    
//     var result = para.appendChild(paraText);
//     console.log(para);
// }
// test();

function test(){
    var divElement = document.createElement("div");
    var pelement = document.createElement("p");
    var result1 = divElement.appendChild(pelement);

    var selement = document.createElement("span");
    var result2 = result1.appendChild(selement);

    var paraText = document.createTextNode("Welcome");
    var result3 = result2.appendChild(paraText);
    
    console.log(divElement);
    alert(divElement);
}

// function test(){
//     var divElement = document.createElement("div");

//     var divElement1 = document.createElement("header");
//     var result1 = divElement.appendChild(divElement1);

//     var divElement2 = document.createElement("section");
//     var result2 = divElement.appendChild(divElement2);

//     var hElement = document.createElement("h1");
//     var result3 = result1.appendChild(hElement);

//     var headText = document.createTextNode("Hello");
//     var result4 = result3.appendChild(headText);

//     var pElement = document.createElement("p");
//     var result5 = result2.appendChild(pElement);

//     var paraText = document.createTextNode("This is Paragraph");
//     var result6 = result5.appendChild(paraText);

//     console.log(divElement);
// }

