"use strict";

const byId = (id) => document.getElementById(id);
const screens = ["landing", "round", "result"];
let category;
let index;
let score;
let answered;

function showScreen(active) {
  for (const id of screens) byId(id).hidden = id !== active;
  window.scrollTo(0, 0);
}

function startRound(selected) {
  category = selected;
  index = 0;
  score = 0;
  showScreen("round");
  byId("category-name").textContent = category.name;
  byId("progress").max = category.questions.length;
  showQuestion();
}

function showQuestion() {
  const question = category.questions[index];
  const count = category.questions.length;
  answered = false;
  byId("progress").value = index;
  byId("position").textContent = `Question ${index + 1} of ${count}`;
  byId("score").textContent = `Score · ${score} / ${count}`;
  byId("prompt").textContent = question.prompt;
  byId("answers").replaceChildren();
  byId("feedback").textContent = "";
  byId("next").hidden = true;

  question.choices.forEach((choice, position) => {
    const button = document.createElement("button");
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.setAttribute("aria-hidden", "true");
    letter.textContent = "ABCD"[position];
    button.append(letter, choice);
    button.addEventListener("click", () => checkAnswer(position));
    byId("answers").append(button);
  });
  byId("prompt").focus();
}

function checkAnswer(selected) {
  if (answered) return;
  answered = true;
  const question = category.questions[index];
  const right = selected === question.correct;
  if (right) score += 1;

  const buttons = byId("answers").children;
  for (const button of buttons) button.setAttribute("aria-disabled", "true");
  buttons[question.correct].classList.add("right");
  if (!right) buttons[selected].classList.add("wrong");
  const verdict = right ? "Correct!" : `Incorrect. The correct answer is ${question.choices[question.correct]}.`;
  byId("feedback").textContent = `${verdict} ${question.explanation}`;
  byId("progress").value = index + 1;
  byId("score").textContent = `Score · ${score} / ${category.questions.length}`;
  byId("next").textContent = index + 1 === category.questions.length ? "See final score" : "Next question";
  byId("next").hidden = false;
  for (const button of buttons) button.tabIndex = -1;
}

byId("next").addEventListener("click", () => {
  if (!answered || byId("round").hidden) return;
  index += 1;
  if (index < category.questions.length) {
    showQuestion();
    return;
  }
  byId("result-category").textContent = category.name;
  byId("total").textContent = `${score} / ${category.questions.length}`;
  showScreen("result");
  byId("result-title").focus();
});

for (const button of document.querySelectorAll("[data-category]")) {
  button.addEventListener("click", () => startRound(categories[button.dataset.category]));
}
byId("retry").addEventListener("click", () => startRound(category));
byId("choose").addEventListener("click", () => {
  showScreen("landing");
  byId("title").focus();
});
