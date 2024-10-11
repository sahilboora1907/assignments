/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  //write your dumb code here
  // let reversedstr = str.toLowerCase().replaceAll(' ','').split("").reverse().join('');
  // let string = str.toLowerCase().replaceAll(' ','').split("").join('');

  // return reversedstr===string;

  let filteredstring = '';
  for(let char of str){
    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')){
      filteredstring += char.toLowerCase();
    }
  }

  let left = 0;
  let right = filteredstring.length - 1;

  while(left < right){
    if(filteredstring[left] !== filteredstring[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
