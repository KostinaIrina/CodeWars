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