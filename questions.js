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
      },
      {
        prompt: "A team merges small changes frequently and checks each one with an automated build and tests. Which practice is this?",
        choices: ["Load balancing", "Continuous integration", "Capacity planning", "Threat modeling"],
        correct: 1,
        explanation: "Continuous integration catches problems early by building and testing changes as they come together."
      },
      {
        prompt: "A passing build is always ready for release, but a person approves each production release. Which practice does this describe?",
        choices: ["Manual testing", "Continuous deployment", "Continuous delivery", "Incident response"],
        correct: 2,
        explanation: "Continuous delivery keeps a tested version ready to release. The final production release can still require approval."
      },
      {
        prompt: "A new version runs beside the old one. When it passes its checks, the team switches all traffic to it. Which deployment strategy is this?",
        choices: ["Blue-green deployment", "Canary deployment", "Rolling deployment", "In-place upgrade"],
        correct: 0,
        explanation: "Blue-green deployment keeps two environments and switches traffic between them."
      },
      {
        prompt: "A service responds to requests for 99.9% of the time it is needed. Which property does this measure?",
        choices: ["Maintainability", "Portability", "Usability", "Availability"],
        correct: 3,
        explanation: "Availability measures how often a service is ready for use when needed."
      },
      {
        prompt: "A quiz works without knowing anyone’s birthday. Which choice follows data minimization?",
        choices: ["Collect birthdays and encrypt them", "Ask for birthdays after the quiz", "Leave birthdays out of the form", "Collect birthdays and hide them on screen"],
        correct: 2,
        explanation: "Data minimization starts with collecting only the information needed for the task."
      },
      {
        prompt: "In a data-flow diagram, what does a trust boundary mark?",
        choices: ["A change in trust between parts of a system", "The maximum request size", "The end of a sprint", "A change in programming language"],
        correct: 0,
        explanation: "Data crosses a trust boundary when it moves between areas with different trust assumptions."
      },
      {
        prompt: "An incident review asks who changed a setting and when. Which record best answers both questions?",
        choices: ["Page-load averages", "An audit log with actors and timestamps", "A list of open features", "A diagram of the network"],
        correct: 1,
        explanation: "An audit event can record the actor, action and time so a change can be traced later."
      },
      {
        prompt: "A browser update changes how an app must save files. What kind of maintenance keeps the app compatible?",
        choices: ["Corrective", "Perfective", "Preventive", "Adaptive"],
        correct: 3,
        explanation: "Adaptive maintenance changes software to keep it working in a changed environment."
      },
      {
        prompt: "Before changing a common grading rule, a team lists the screens, modules and tests that depend on it. What is it doing?",
        choices: ["Load testing", "Deployment automation", "Change-impact analysis", "Threat modeling"],
        correct: 2,
        explanation: "Change-impact analysis traces what a proposed change could affect before implementation."
      },
      {
        prompt: "A team wants to refactor working code. Which first step makes it easier to detect an accidental behavior change?",
        choices: ["Cover the current behavior with tests", "Remove validation checks", "Change all modules in one edit", "Release the refactor immediately"],
        correct: 0,
        explanation: "Tests capture the expected behavior and can be rerun after each small change."
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
        explanation: "Iron in Martian rocks and dust reacts with oxygen. The reddish iron oxides give Mars its familiar color."
      },
      {
        prompt: "Which instrument produces sound when small hammers strike its strings?",
        choices: ["Violin", "Harp", "Guitar", "Piano"],
        correct: 3,
        explanation: "In an acoustic piano, pressing a key moves a hammer that strikes the strings."
      },
      {
        prompt: "What makes a popcorn kernel burst when heated?",
        choices: ["Its starch freezes", "Steam builds up inside the hull", "Its oil turns into sugar", "Air enters through the tip"],
        correct: 1,
        explanation: "Water inside the kernel turns to steam. Pressure builds until the hull splits and the starch expands."
      },
      {
        prompt: "Which gas do plants take in to make sugars during photosynthesis?",
        choices: ["Nitrogen", "Helium", "Carbon dioxide", "Oxygen"],
        correct: 2,
        explanation: "Plants use energy from sunlight to make sugars from carbon dioxide and water."
      },
      {
        prompt: "What shape is each cell in a typical honeybee honeycomb when viewed from the open end?",
        choices: ["Triangle", "Pentagon", "Hexagon", "Octagon"],
        correct: 2,
        explanation: "Honeycomb cells have six sides and fit together with shared walls."
      },
      {
        prompt: "Which chess piece can leap over other pieces as part of its normal move?",
        choices: ["Bishop", "Knight", "Rook", "Queen"],
        correct: 1,
        explanation: "A knight moves in an L shape and can jump over pieces along the way."
      },
      {
        prompt: "What is the Japanese art of folding paper into shapes called?",
        choices: ["Origami", "Haiku", "Ikebana", "Kabuki"],
        correct: 0,
        explanation: "Origami uses folds to turn a sheet of paper into shapes such as a crane."
      },
      {
        prompt: "Which gas makes the bubbles in sparkling water?",
        choices: ["Oxygen", "Argon", "Hydrogen", "Carbon dioxide"],
        correct: 3,
        explanation: "Dissolved carbon dioxide comes out of solution as bubbles when the pressure drops."
      },
      {
        prompt: "Which ocean is home to the Great Barrier Reef?",
        choices: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
        correct: 1,
        explanation: "The reef lies in the Coral Sea, part of the Pacific Ocean off northeastern Australia."
      },
      {
        prompt: "In a relay race on a track, what do runners pass to their teammates?",
        choices: ["A whistle", "A flag", "A baton", "A timing chip"],
        correct: 2,
        explanation: "Each runner hands the baton to the next runner in the exchange zone."
      },
      {
        prompt: "What causes the Moon to appear in different phases over a month?",
        choices: ["We see different portions of its sunlit half", "Earth casts a shadow on it every night", "The Moon changes its shape", "Clouds cover part of the Moon"],
        correct: 0,
        explanation: "As the Moon orbits Earth, the fraction of its sunlit half that we can see changes."
      },
      {
        prompt: "In knitting, what forms the fabric?",
        choices: ["Layers of pressed fibers", "Rows of glued threads", "Two sets of threads woven at right angles", "Interlocking loops of yarn"],
        correct: 3,
        explanation: "Knitting builds fabric by drawing new loops of yarn through existing loops."
      },
      {
        prompt: "Which of these instruments is a woodwind?",
        choices: ["Cello", "Trombone", "Clarinet", "Timpani"],
        correct: 2,
        explanation: "A clarinet uses a vibrating reed to set the air in its tube in motion."
      },
      {
        prompt: "Which ingredient makes most bread dough rise by fermentation?",
        choices: ["Salt", "Yeast", "Butter", "Cornstarch"],
        correct: 1,
        explanation: "Yeast ferments sugars and releases carbon dioxide. The trapped gas expands the dough."
      }
    ]
  }
};
