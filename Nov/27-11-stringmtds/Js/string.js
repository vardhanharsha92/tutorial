// alert("Hello World");

var a="hai";
var b="welcome"
var result= a.length;
var result1= b.length;
console.log(result);
console.log(result1);

var a="  hai";
var b=" Welcome";
var combineString=a.concat(b);
console.log(combineString);

var a="  hai  ";
var b=" Welcome ";
var toUpperCaseString = a.toUpperCase();
console.log(toUpperCaseString);

var b=" WELCOME ";
var toLowerCaseString = b.toLocaleLowerCase();
console.log(toLowerCaseString);

var a="  hai  ";
var b=" Welcome ";
var trim = a.trim();
var trim1 = b.trim();
console.log(trim);
console.log(trim1);

var a="hai";
var b=3;
console.log(typeof(b));
console.log(typeof(a));

var firstName = "Chand";
var middleName = "Bass";
var lastName = "Studio";
var result = firstName.concat(" " + middleName + " " + lastName);
console.log(result);

var newSlice = result.slice(0,5);
console.log(newSlice);

var animals = "cat,rat,pig,dog,cow,tiger";
var sliceArray = animals.slice(16,25);
console.log(sliceArray);

var subStrArray = animals.substr(12,8);
console.log(subStrArray);

var animals = "cat,rat,cat,pig,dog,cow,tiger,cat,dog,cat,pig,dog,cow,tiger";
var pos = animals.indexOf("cat");
var pos1 = animals.lastIndexOf("cat");
var pos2 = animals.search("rat");
var replaceAnimal = animals.replace("pig","crocodile");
var character = animals.charAt(5);
var character1 = animals.charCodeAt(5);
console.log(pos);
console.log(pos1);
console.log(pos2);
console.log(replaceAnimal);
console.log(character);
console.log(character1);