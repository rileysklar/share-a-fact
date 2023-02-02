console.log("hello world!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share-a-fact";
  }
});

let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Protugal";
