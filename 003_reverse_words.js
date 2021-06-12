// www.codewars.com
// Codewars is an educational community for computer programming. On the platform, 
// software developers train on programming challenges known as kata. These discrete
// programming exercises train a range of skills in a variety of programming languages,
// and are completed within an online integrated development environment.
// On Codewars the community and challenge progression is gamified, with users
// earning ranks and honor for completing kata, contributing kata, and quality solutions.


// Exercise:
// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(inputString) {
  splitString = inputString.split(' ')
  reverseStrings = []
  
  for (let word of splitString) {
      reverseStrings.push(word.split('').reverse().join(''))
    }
  return reverseStrings.join(' ')
  }


  // console.log(reverseWords("This is an example!"))


