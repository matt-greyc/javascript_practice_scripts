// www.codewars.com
// Codewars is an educational community for computer programming. On the platform, 
// software developers train on programming challenges known as kata. These discrete
// programming exercises train a range of skills in a variety of programming languages,
// and are completed within an online integrated development environment.
// On Codewars the community and challenge progression is gamified, with users
// earning ranks and honor for completing kata, contributing kata, and quality solutions.


// Exercise:
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
// They would like your help with an application form that will tell prospective members
// which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input will consist of a list of lists containing two items each. Each list contains information
// for a single potential member. Information consists of an integer for the person's age and
// an integer for the person's handicap. 
// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
    membershipType = []

    for (let element of data) {
        isSenior = element[0] >= 55 && element[1] > 7

        if (isSenior) {
            membershipType.push('Senior')
        }
        else {
            membershipType.push('Open')
        }

        }
    return membershipType
    }

// console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))

