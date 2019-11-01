// let str = prompt("Write word with space").toLowerCase();

// if (str[0] == str[str.length - 1]) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// console.log(str.replace(' ', ''));


// let str = prompt("Write word");

// console.log(str[0].toUpperCase() + str.slice(1));

// let str = prompt("Write word");
// let tag = prompt("write tag");

// console.log("<" + tag + ">" + str + '</' + tag + '>');

let str = prompt('Enter a string');

if (str[0] == ' ') {
  console.log(str.slice(1));
} else if (str[str.length - 1] == ' ') {
  console.log(str.slice(0, str.length - 1));
}