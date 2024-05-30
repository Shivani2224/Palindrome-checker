const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const outPut = document.getElementById("result");

function isPalindrome() {
  const input = userInput.value;
  const userinputhandler = input.toLowerCase();
  const cleanStr = userinputhandler.replace(/[^A-Za-z0-9]/g, "");
  const PalindromeText = cleanStr === cleanStr.split("").reverse().join("");

  if (input == "") {
    outPut.textContent = "Please enter a value";
  } else {
    if (PalindromeText) {
      outPut.textContent = `"${input}" is Palindrome`;
    } else {
      outPut.textContent = `"${input}" is not Palindrome`;
    }
  }
}

checkBtn.addEventListener("click", isPalindrome);
