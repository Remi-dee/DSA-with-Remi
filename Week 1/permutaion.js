/*Problem: Generate all possible permutations of a given string using recursion.
Str = abc

output = ['acb', 'bca', 'bac', 'cab' , 'cba']

now we could write a recursive function that takes into consideration the first charaacter

identify the termination point and the logic

base case = length of the string <= 1 then return an array of  a single string

base case returns a single element array 












using an if statement to check if the value is in then it exists

a way to change the order of each character occurence
compare the current state of the check with the occurence of next string

we need to have an anchor 
we need to have a starting point 
having "a" as anchor abc, acb
"b" as anchor bca... or bac
"c" as anchor cba or cab ..



*/

function permutation (str) {
const characters = str.split("")
const result = []
for( const i of characters) {

}

}

