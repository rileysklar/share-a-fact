// console.log("hello world!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share-a-fact";
  }
});

// let votesInteresting = 23;
// let votesMindblowing = 5;
// const text = "Lisbon is the capital of Protugal";

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

const age1 = calcFactAge(20);
console.log(age1);

let votesInteresting = 20;
let votesMindblowing = 20;

if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
}
