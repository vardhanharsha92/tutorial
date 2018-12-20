document.getElementById("#MyBtn").addEventListener("click",displayDate);
function displayDate(){
    document.getElementById("#demo").innerHTML = Date();
}

// function hideText(){
//     document.getElementById("demo1").style.display="none";
// }

document.getElementById("#HideBtn").removeEventListener("click",hideText);
function hideText(){
    document.getElementById("#demo1").innerHTML=" ";
}