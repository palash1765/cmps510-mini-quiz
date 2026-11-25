"use strict";

const byId = (id) => document.getElementById(id);
const screens = ["landing", "round", "result"];
const roundSize = 5;
const hintsPerRound = 2;
const historyInMemory = new Map();
let roundQuestions;
let category;
let index;
let score;
let answered;
let hintsLeft;

function showScreen(active) {
  for (const id of screens) byId(id).hidden = id !== active;
  window.scrollTo(0, 0);
}

// Deal from each category separately. A refresh resets the score, but keeps the draw history.
function drawRound(category) {
  const bank = category.questions;
  const key = "cmps510-mini-quiz:draws:" + category.name;
  let history = historyInMemory.get(key) || [];
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (Array.isArray(saved)) history = saved;
  } catch {
    // Storage may be unavailable when the quiz is opened as a local file.
  }

  const previousRound = new Set(history.slice(-roundSize));
  const seen = new Set(history);
  const round = [];
  while (round.length < Math.min(roundSize, bank.length)) {
    let pool = bank.filter(question => !seen.has(question.prompt));
    if (pool.length === 0) {
      seen.clear();
      pool = bank;
    }
    // At a cycle boundary, keep the last round out of the next hand when possible.
    const available = pool.filter(question => !round.includes(question));
    const fresh = available.filter(question => !previousRound.has(question.prompt));
    const candidates = fresh.length ? fresh : available;
    const choice = candidates[Math.floor(Math.random() * candidates.length)];
    seen.add(choice.prompt);
    round.push(choice);
  }

  const updated = Array.from(seen);
  historyInMemory.set(key, updated);
  try {
    localStorage.setItem(key, JSON.stringify(updated));
  } catch {
    // The in-memory copy still keeps retries varied during this visit.
  }
  return round;
}

function startRound(selected) {
  category = selected;
  roundQuestions = drawRound(category);
  hintsLeft = hintsPerRound;
  index = 0;
  score = 0;
  showScreen("round");
  byId("category-name").textContent = category.name;
  byId("progress").max = roundQuestions.length;
  showQuestion();
}

function showQuestion() {
  const question = roundQuestions[index];
  const count = roundQuestions.length;
  answered = false;
  byId("progress").value = index;
  byId("position").textContent = `Question ${index + 1} of ${count}`;
  byId("score").textContent = `Score · ${score} / ${count}`;
  byId("prompt").textContent = question.prompt;
  byId("clue").textContent = "";
  byId("hint-count").textContent = `Hints left: ${hintsLeft}`;
  byId("hint-button").disabled = hintsLeft === 0;
  byId("answers").replaceChildren();
  byId("feedback").replaceChildren();
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

byId("hint-button").addEventListener("click", () => {
  if (byId("hint-button").disabled) return;
  hintsLeft -= 1;
  byId("hint-button").disabled = true;
  byId("hint-count").textContent = `Hints left: ${hintsLeft}`;
  byId("clue").textContent = `Hint: ${roundQuestions[index].hint}`;
});

function checkAnswer(selected) {
  if (answered) return;
  answered = true;
  byId("hint-button").disabled = true;
  const question = roundQuestions[index];
  const right = selected === question.correct;
  if (right) score += 1;

  const buttons = byId("answers").children;
  for (const button of buttons) {
    button.setAttribute("aria-disabled", "true");
    button.tabIndex = -1;
  }
  buttons[question.correct].classList.add("right");
  if (!right) buttons[selected].classList.add("wrong");
  buttons[question.correct].querySelector(".letter").textContent = "✓";
  if (!right) buttons[selected].querySelector(".letter").textContent = "×";
  const verdict = document.createElement("strong");
  verdict.textContent = right ? "Correct!" : `Incorrect. The answer is ${question.choices[question.correct]}.`;
  byId("feedback").replaceChildren(verdict, document.createTextNode(question.explanation));
  byId("progress").value = index + 1;
  byId("score").textContent = `Score · ${score} / ${roundQuestions.length}`;
  byId("next").textContent = index + 1 === roundQuestions.length ? "See Final Score" : "Next Question";
  byId("next").hidden = false;
}

byId("next").addEventListener("click", () => {
  if (!answered || byId("round").hidden) return;
  index += 1;
  if (index < roundQuestions.length) {
    showQuestion();
    return;
  }
  showResult();
});

function showResult() {
  const count = roundQuestions.length;
  const percentage = Math.round(score / count * 100);
  let message = "Try a fresh set of five and build on what you learned.";
  if (score === count) {
    message = "A clean sweep! Try the other category for a new challenge.";
  } else if (percentage >= 60) {
    message = "You got more than half right. Try five more from this category.";
  }
  byId("result-category").textContent = category.name;
  byId("total").textContent = `${score} / ${count}`;
  byId("percentage").textContent = `${percentage}%`;
  byId("result").style.setProperty("--percent", `${percentage}%`);
  byId("performance").textContent = message;
  showScreen("result");
  byId("result-title").focus();
}

for (const button of document.querySelectorAll("[data-category]")) {
  button.addEventListener("click", () => startRound(categories[button.dataset.category]));
}
byId("retry").addEventListener("click", () => startRound(category));

function returnToCategories() {
  roundQuestions = [];
  hintsLeft = hintsPerRound;
  category = null;
  index = 0;
  score = 0;
  answered = false;
  showScreen("landing");
  byId("title").focus();
}

const exitDialog = byId("exit-dialog");
byId("exit-round").addEventListener("click", () => exitDialog.showModal());
byId("continue-round").addEventListener("click", () => exitDialog.close());
byId("confirm-exit").addEventListener("click", () => {
  exitDialog.close();
  returnToCategories();
});
byId("choose").addEventListener("click", returnToCategories);
