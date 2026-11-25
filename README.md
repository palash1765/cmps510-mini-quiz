# Mini Quiz

Mini Quiz is the final individual project for CMPS 510. Each round has five questions. Choose **Academic** for software engineering or **General Knowledge** for a mix of science, geography, and music. Each answer gives immediate feedback and a short explanation. A correct answer earns one point. At the end, see your score out of five and the percentage you answered correctly. Try the round again or switch categories.

Curious why Mars looks red? Try General Knowledge. Prefer to untangle a tricky bit of code? Start with Academic.

**[Play the Mini Quiz](https://palash1765.github.io/cmps510-mini-quiz/)**

![Mini Quiz landing screen with the Academic and General Knowledge categories](./preview.png)

[Read the one-page final report (PDF)](./final-report.pdf)

## Run locally

Open `index.html` in a browser and select a category card. The app runs entirely in the browser using plain HTML, CSS, and JavaScript. Refreshing the page starts a new session.

## How the quiz works

- `index.html` defines the landing, question, and result screens. `styles.css` handles the desktop and phone layouts.
- `questions.js` holds five questions per category. Each question has four choices, a correct answer index starting at zero, and an explanation.
- `quiz.js` tracks the current category, question, and score. It accepts one answer per question and resets the round when the player selects **Try Again**.

## Score check

In the Academic round, selecting **B, A, A, D, A** gives **3/5 (60%)**. Questions 1, 3, and 4 earn one point each. This run was checked in Chrome, along with an all-incorrect run (0/5), a perfect General Knowledge run (5/5), repeat clicks, retry, category switching, and the phone layout.

## Course sources

The Academic questions use concepts from Dr. Tsige Tessema's CMPS 510 lectures *Secure and Dependable Software Engineering* and *Software Maintenance and Evolution*. The questions and examples were written for this quiz.

## AI Disclosure

AI-assisted tools were used for limited support during development, including debugging, code review, and improving the user interface. I reviewed, tested, and verified the final application and I understand its functionality, code structure, and design decisions.

Specifically, Codex helped implement the quiz, draft questions and documentation, and run browser tests with Playwright and Chrome.
