/**
 *
 * input = abc
 *
 * output = ['bac', 'cab', 'acb', 'bca', 'cba']
 *
 *
 * base case = str.length <= 1 return [str]
 *
 * input = abc
 *
 * firstchar = str[0] // abc
 * remainchar = recursion(str(1)) // bc
 * ['bc', 'cb']
 *
 * for(remaining of remianingChar)
 * for (let i = 0; i < remaining.length; i++)
 * result.push(remaining.slice(0,i) + firstchar + remaining.slice(i))
 *
 *
 * result.push(input)
 *
 * ['bac','cab', abc']
 *
 * input = bc
 * firstchar = str[0]
 * result = []
 * remainchar = recursion(str.slice(1)) // c
 * ['c']
 *
 * for(remaining of remianingChar)
 * for (let i = 0; i < remaining.length; i++)
 * result.push(remaining.slice(0,i) + firstchar + remaining.slice(i))
 *
 *
 *
 * return result
 *
 * input = c
 * return ['c']
 */

function recursion(str) {
    console.log(str);
    if (str.length <= 1) {
      return [str];
    }
  
    let firstchar = str[0];
    console.log(firstchar)
    let remainingChar = recursion(str.slice(1));
    
    
    let result = [];
  
    for (const remaining of remainingChar) {
      for (let i = 0; i < remaining.length; i++) {
        console.log(remaining.slice(0,i))
        result.push(remaining.slice(0, i) + firstchar + remaining.slice(i));
      }
    }
    return result;
  }
  
  console.log(recursion("abc"));