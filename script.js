// function firstWord(s) {
//   // your code here
// 	let newS = "";
// 	for (let i = 0; i < s.length; i++) {
// 		let currChar = s[i];
// 		if(currChar == " "){
// 			break;
// 		}
// 			newS = newS + currChar;
// 	}
// 	return newS
// }
function firstWord(s) {
	  return s.split(" ")[0];
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
