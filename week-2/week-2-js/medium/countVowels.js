/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    // Your dumb code here

    // let vowelarr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // let arr = str.split("");
    // let total = 0;
    // for(let i=0; i<arr.length; i++){
    //   for(let j=0; j<vowelarr.length; j++){
    //     if(arr[i]==vowelarr[j]){
    //       total++;
    //     }
    //   }
    // }
    // return total;

    const vowels = "aeiouAEIOU";
    let count = 0;

    for(let char of str){
      if(vowels.includes(char)){
        count++;
      }
    }
    return count;
    
}

module.exports = countVowels;