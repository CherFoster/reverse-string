function reverseString(str) {
  let n = "";
  for(let i = str.length-1; i>=0; i--){
    n += str[i];
  }
  return n;
}

// create an empty new string
// iterate over length of string backwards, where i is to the last index of the str
// decrement i by 1 in each iteration
// Concatenate the character at the current index 'i' of string 'str' to the variable 'n'

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;


// faster way: split the string, reverse it, and join it back together
// function reverseString(str){
//   return str.split('').reverse().join('';)
// }
