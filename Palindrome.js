var testString = "noon";

function testPalindrome (sample) {
  var testArray = Array.from(sample);
  var clonedTestArray = testArray.slice(0);
  var reverseTestArray = clonedTestArray.reverse();
  var palindrome = true;

  for (i = 0; i < testArray.length; i++) {
      if (testArray[i] == reverseTestArray[i]) {
        palindrome = true;
      }
      else {
        palindrome = false;
        break;
      }
  }

  if (palindrome) {
        console.log("The Sample of " + testString + " is a Palindrome");
      }
      else {
        console.log("The Sample of " + testString + " is not a Palindrome");
      }
}

testPalindrome(testString);
