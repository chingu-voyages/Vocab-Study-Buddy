const basePairs = [
  ["hello", "bonjour"],
  ["goodbye", "au revoir"],
  ["please", "s'il vous plaît"],
  ["thank you", "merci"],
  ["thank you very much", "merci beaucoup"],
  ["you're welcome", "de rien"],
  ["excuse me", "excusez-moi"],
  ["yes", "oui"],
  ["no", "non"],
  ["can you help me, please?", "pouvez-vous m’aider, s’il vous plaît?"]
];

let datasetMap;
function createDataset(base) {
  let dataset = [];
  base.forEach(function(array) {
    dataset.push([
      array[0],
      {
        word: array[0],
        translation: array[1],
        isSelected: null,
        isCorrect: null
      }
    ],
    [
      array[1],
      {
        word: array[1],
        translation: array[0],
        isSelected: null,
        isCorrect: null
      }
    ]);
  });
  datasetMap = new Map(dataset);
}

createDataset(basePairs);