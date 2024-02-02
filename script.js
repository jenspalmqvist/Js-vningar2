const alertButton = document.getElementById("alertButton");
const redButton = document.getElementById("redButton");
const yellowButton = document.getElementById("yellowButton");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const greetingParagraph = document.getElementById("greetingParagraph");
const visitorSection = document.getElementById("visitorSection");
const visitorList = document.getElementById("visitorList");
const nameArray = [];
nameForm.addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();

  const data = new FormData(nameForm);
  const firstName = data.get("firstName");
  console.log(firstName);
  nameArray.push(firstName);

  // visitorSection.innerText = nameArray.join(", ");

  const listElement = document.createElement("li");
  listElement.textContent = firstName;

  visitorList.appendChild(listElement);

  if (nameArray.length > 1) {
    greetingParagraph.innerText = `Hej ${firstName}! Personen innan dig var ${nameArray.at(
      -2
    )}!`;
  } else {
    greetingParagraph.innerText = "Hej " + firstName + "!";
  }
  nameForm.reset();
}

let showButtonText = true;

alertButton.addEventListener("click", () => alert("Red alert!"));

redButton.addEventListener("click", redFunction);

// "Vanliga" functions kan användas i addEventListener-funktioner som ligger
// ovanför funcktionen då dessa skickas högst upp i filen av javascript
// via det som kallas hoisting
function redFunction() {
  document.body.style.backgroundColor = "red";
}

function yellowFunction() {
  document.body.style.backgroundColor = "yellow";
}

// För att kunna använda en arrow function i en event listener
// behöver den deklareras innan addEventlistener försöker hänvisa till den
const menuFunction = () => {
  navLinks.classList.toggle("showNav");
  menuButton.innerText = showButtonText ? "Dölj meny!" : "Visa meny!";
  showButtonText = !showButtonText;
};

menuButton.addEventListener("click", menuFunction);
