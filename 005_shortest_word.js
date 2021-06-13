// www.codewars.com
// Codewars is an educational community for computer programming. On the platform, 
// software developers train on programming challenges known as kata. These discrete
// programming exercises train a range of skills in a variety of programming languages,
// and are completed within an online integrated development environment.
// On Codewars the community and challenge progression is gamified, with users
// earning ranks and honor for completing kata, contributing kata, and quality solutions.


// Exercise:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
// Example: "Let's travel abroad shall we" -> 2


function findShort(inputString){
  splitString = inputString.split(' ')
  shortestLength = splitString[0].length

  for (let word of splitString) {
    if (word.length < shortestLength) {
      shortestLength = word.length
      }
    }
  return shortestLength
  }


// console.log(findShort("Let's travel abroad shall we"))
