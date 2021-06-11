// www.codewars.com
// Codewars is an educational community for computer programming. On the platform, 
// software developers train on programming challenges known as kata. These discrete
// programming exercises train a range of skills in a variety of programming languages,
// and are completed within an online integrated development environment.
// On Codewars the community and challenge progression is gamified, with users
// earning ranks and honor for completing kata, contributing kata, and quality solutions.


// Exercise:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).
// Examples:
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(inputString){

    if (inputString.length === 0) {
        return ''
    }

    const separatorsList = '-_'
    let firstWord = true
    let currentWord = ''
    let finalString = ''

    for (let char of inputString) {
        if (separatorsList.indexOf(char) === -1) {
            currentWord += char
        }
        else if (separatorsList.indexOf(char) !== -1) {
            if (firstWord === false) {
                wordToAdd = currentWord[0].toUpperCase() + currentWord.slice(1)
                finalString += wordToAdd
                currentWord = ''
            }
            else if (firstWord === true) {
                finalString += currentWord
                currentWord = ''
                firstWord = false
            }
        }
    }

    if (firstWord === false) {
        wordToAdd = currentWord[0].toUpperCase() + currentWord.slice(1)
        finalString += wordToAdd
    }
    else if (firstWord === true) {
        finalString += currentWord
    }
    
    return finalString
    }


// console.log(toCamelCase("the-stealth_super_ninja-warrior"))