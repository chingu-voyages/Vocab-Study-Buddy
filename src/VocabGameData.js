export const basePairs = [
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

export function createDataset(base) {
  if (base == null) {
    throw new Error('createDataset does not allow null values')
  }
  if (!Array.isArray(base)) {
    throw new Error('createDataset does not allow non arrays')
  }
  let dataset = [];
  base.forEach(function(array) {
    dataset.push([
      array[0],
      {
        word: array[0],
        translation: array[1],
        isSelected: false,
        isCorrect: false
      }
    ],
    [
      array[1],
      {
        word: array[1],
        translation: array[0],
        isSelected: false,
        isCorrect: false
      }
    ]);
  });
  return new Map(dataset);
}

export let GameDataset;
try {
  GameDataset = createDataset(basePairs)
} catch(error) {
  console.error(error.message);
  GameDataset = new Map();
}