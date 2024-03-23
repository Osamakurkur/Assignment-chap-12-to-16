//Chapter no 12/13:
//answer no 1:
// var A = 65;
// var Z = 90;
// var a = 97;
// var z = 122;
// console.log(z)

//answer no 2:
// var num1 = 0;
// var num2 = 1;

// console.log= +prompt ("Enter a integer number");

// if (num1 === num2) {
//     console.log("The two integers are equal.");
// } else if (num1 > num2) {
//     console.log(`The larger integer is: ${num1}`);
// } else {
//     console.log(`The larger integer is: ${num2}`);
// }


//answer no 3:
// if (Number > 0){
//     console.log("The number is positive.");
// }else if (Number < 0){
//     console.log("The number is negative.");
// }else{
//     console.log("The number is zero");
// }
// console.log= +prompt("Enter a Number.");


//answer no 4:
// var vowel = ["a", "e", "i", "o", "u"];

// if (character === vowel){
//     console.log("true");
// }else {
//     console.log("false");
// }
// console.log= prompt("Enter a character");

//answer no 5:
// var password=("saylanismit");

// var userPassword = prompt("Enter a passowrd");

// if (userPassword === password){
//     console.log("correct password");
// }else{
//     console.log("incorrect password");
// }



//answer no 6:
// var hour = +prompt("Enter a number");

// if (hour < 18){
//     console.log("Good evening");
// }else{
//     console.log("Have a Good day");
// }









//Chapter no 14/16:
//Answer No 1:
// var studentNames = [];

// //Answer No 2:
// var studentData = {
//     names:  []
// }

// // Answer No 3:
// var CountryArr = ["Pakistan", "India", "China", "Iran"];

// // Answer No 4:
// var numberArr = [1, 2, 3, 4, 5, 6, 7];

// // Answer No 5:
// var booleanArr = [true, false];

// // Answer No 6:
// var mixedArr = ["Apple", 1, true, "Banana", 2, "Orange", false, "Mango", 3];


//Answer No 7:
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// console.log (qualifications);

//Answer no 8:
// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 230, 480];


// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (studentScores[i] / 500) * 100;
//     console.log(`${studentNames[i]} scored ${studentScores[i]} out of 500, which is ${percentage}%`);
// }

//Answer no 9:
// var colors = ["red", "green", "blue"];

// document.write("<b>Original Array:</b> " + colors.join(", ") + "<br>");


// var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);

// document.write("<b>Array after adding color to the beginning:</b> " + colors.join(", ") + "<br>");

// var colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);

// document.write("<b>Array after adding color to the end:</b> " + colors.join(", ") + "<br>");

// colors.unshift("purple", "yellow");

// document.write("<b>Array after adding two colors to the beginning:</b> " + colors.join(", ") + "<br>");

// colors.shift();

// document.write("<b>Array after deleting the first color:</b> " + colors.join(", ") + "<br>");

// colors.pop();

// document.write("<b>Array after deleting the last color:</b> " + colors.join(", ") + "<br>");

// var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// var colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);

// document.write("<b>Array after adding color at index:</b> " + colors.join(", ") + "<br>");

// var indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// var deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, deleteCount);

// document.write("<b>Array after deleting colors at index:</b> " + colors.join(", "));
