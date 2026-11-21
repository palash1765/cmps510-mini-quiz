// correct is the zero-based position of the right answer in choices.
const categories = {
  academic: {
    name: "Academic",
    questions: [
      {
        prompt: "A user pretends to be someone else. Which STRIDE threat does this illustrate?",
        choices: ["Tampering", "Spoofing", "Repudiation", "Denial of service"],
        correct: 1,
        explanation: "Spoofing means assuming a false identity."
      },
      {
        prompt: "A reporting tool only reads sales totals. Which permission follows least privilege?",
        choices: ["Full database access", "Permission to edit sales", "Read access to sales totals", "Permission to manage users"],
        correct: 2,
        explanation: "Least privilege grants just the access a task requires."
      },
      {
        prompt: "After release, a team fixes a bug that counts a quiz answer twice. What type of maintenance is this?",
        choices: ["Corrective", "Adaptive", "Perfective", "Preventive"],
        correct: 0,
        explanation: "Corrective maintenance fixes a defect found after release."
      },
      {
        prompt: "A team copies a scoring rule to meet a deadline. Every update now takes three edits. What has the team incurred?",
        choices: ["Greater test coverage", "Higher availability", "A change in requirements", "Technical debt"],
        correct: 3,
        explanation: "The shortcut created extra work each time the scoring rule changes."
      },
      {
        prompt: "Which change is an example of refactoring?",
        choices: ["Adding a timed round", "Extracting repeated code into a function while preserving results", "Changing how many points an answer earns", "Adding another quiz category"],
        correct: 1,
        explanation: "Refactoring improves the internal structure while preserving observable behavior."
      }
    ]
  },
  general: {
    name: "General Knowledge",
    questions: [
      {
        prompt: "Which ocean lies between eastern Africa and western Australia?",
        choices: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
        correct: 2,
        explanation: "The Indian Ocean stretches from the east coast of Africa to the west coast of Australia."
      },
      {
        prompt: "What gives Mars its reddish color?",
        choices: ["Iron oxide", "Liquid lava", "Copper crystals", "Red algae"],
        correct: 0,
        explanation: "Iron oxide, also called rust, colors the dust on the surface of Mars."
      },
      {
        prompt: "Which instrument produces sound when small hammers strike its strings?",
        choices: ["Violin", "Harp", "Guitar", "Piano"],
        correct: 3,
        explanation: "Pressing a piano key moves a hammer that strikes the strings."
      },
      {
        prompt: "Which line divides Earth into the Northern and Southern Hemispheres?",
        choices: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"],
        correct: 1,
        explanation: "The equator circles Earth at zero degrees latitude."
      },
      {
        prompt: "Which gas do plants take in to make sugars during photosynthesis?",
        choices: ["Nitrogen", "Helium", "Carbon dioxide", "Oxygen"],
        correct: 2,
        explanation: "Plants use energy from sunlight to make sugars from carbon dioxide and water."
      }
    ]
  }
};
