/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz"
      .split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
  }
/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.
*/
  var passingLetters = ("abcdefghijklm").split("");// a base array of acceptable letters
	var a = s.length;//this will be the denominator in the final result
	var i = 0;//index number for the while loop to pass throught the string
	var count = 0;//this will be the numerator in the final result

	while (i<a)
	{
		if (passingLetters.indexOf(s[i])===-1) {
			count++;
		}
		i++;
	}
	return (count + "/" + a);
  /*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
  */
  function findShort(s){
    let res = s.split(' ');
    let a = Infinity;
    
    for (let i = 0; i < res.length; i++) {
      a = Math.min(res[i].length, a);
    }
    return a;
  }
  
  console.log(findShort("Hello my dear friend"));
  /*
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.
  */
  var isSquare = function(n){
    if(n === 0){
    
    return true} else {
    return n > 0 && Math.sqrt(n) % 1 === 0;
     }
    } 
    /*
  The parameter of accum is a string which includes only letters from a..z and A..Z.
    */
    function accum(s) {
      const result = []
      const lowerStr = s.toLowerCase()
    
      for(let i = 0; i < lowerStr.length; i++) {
        let str = lowerStr[i].toUpperCase()
        for(let j = 0; j < i; j++) {
          str += lowerStr[i]
        }
        result.push(str)
      }
    
      return result.join("-")
    }
    /*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
    */
    function solution(number){
      let counter = 0
       for(let i = 3; i < number; i++) {
           if(i % 3 === 0 || i % 5 === 0) {
               counter += i
           }
       }
       return counter
   }
   /*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
   */
   function spinWords(string){
    return string.replace(/\w{5,}/g, 
      function(w) {return w.split('').reverse().join('')}
    )
  }
  /*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
  */
  function maxSequence(arr){
    let currentSum = 0
    let maxSum = 0
    
    if(arr.length === 0){
        return 0
    }
  
    arr.forEach(a => {
      currentSum = Math.max(a, currentSum + a)
      maxSum = Math.max(maxSum, currentSum)
    })
    return maxSum
  }
  
  maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])
  /*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
  */
  function duplicateEncode(str){
    //create a var to hold string value that IGNORES case
    var word = str.toLowerCase();
    //create a var to hold the finished string to return after it's looped through 
    var unique = '';
    //loop through all letters in string
      for (var i = 0; i < word.length; i++) {
    //check for any characters that repeat
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
    //for each character that never dupes, place (
          unique += '(';
        } else
    //for each character that IS a dupe, place )
        unique += ')';
      }
    //return the full string value where '(' are non duped and all')' are duped
      return unique;
    
    }
    //test by printing this in the console
    console.log(duplicateEncode('BaRaban'));