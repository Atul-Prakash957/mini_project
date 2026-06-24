const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+<>?/|";

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
    let length = lengthSlider.value;
    let chars = "";

    if (upper.checked) chars += upperChars;
    if (lower.checked) chars += lowerChars;
    if (number.checked) chars += numberChars;
    if (symbol.checked) chars += symbolChars;

    if (chars.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordBox.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordBox.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
});
