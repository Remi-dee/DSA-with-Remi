/*

As a security analyst, your responsibility is to analyze letters received through a
suspicious channel. These letters are provided in text format, and your task is to
examine them and identify specific keywords or phrases that match a predefined
set of watchwords. To streamline and automate this process, you aim to develop
a function that can search and flag these letters. The desired outcome of the
function is returning a list of flagged keywords and the threat level based on the
frequency of word/phrase occurrences.

Key Words - [“betray”, “sad”, “trauma”, “rose”, “Pikachu”, “Rambo”, “base”,
“Elon”, “Soccer”]

Threat_level:
- Risky - No word was repeated
- Critical - Double repetition of any word
- Demon - Triple or more repetition of any word
Return: {flagged_words:['betray', 'rose', 'sad'], threat_level: “Risky”}

- Conv string to array
- detect threat level
- check for occurence of keywords in letters (string)
let threats_ = new Map();
threats_.set('betray', 3);
threats_.set('elon', 1);
threats_.set('pikachu', 1);
*/

const keywords = [
  "betray",
  "sad",
  "trauma",
  "rose",
  "Pikacchu",
  "Rambo",
  "base",
  "Elon",
  "Soccer",
];
let letters =
  "I betray my sad rose Pikacchu is Rambo best friend and it made me feel sad Rambo ";

let detectThreatLevel = (threats) => {
  let wordsFound = [];
  let threatCounter = 0;

  for (const [key, value] of threats) {
    wordsFound.push(key);
    if (value > threatCounter) {
      threatCounter = value;
    }
  }

  return {
    flagged_words: wordsFound,
    threat_level:
      threatCounter == 1 ? "Risk" : threatCounter == 2 ? "Critical" : "Demon",
  };
};

function keywordOccurence() {
  const threats = new Map();
  letters.split(" ").map((word) => {
    keywords.map((keyword) => {
      if (keyword == word) {
        if (threats.has(keyword)) {
          let newVal = threats.get(keyword) + 1;

          threats.set(keyword, newVal);
        } else {
          threats.set(keyword, 1);
        }
      }
    });
  });

  return detectThreatLevel(threats);
}

keywordOccurence();
