export const frenchPairs = [
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

export const italianPairs = [
  ["hello", "ciao"],
  ["goodbye", "addio"],
  ["please", "per favore"],
  ["thank you", "grazie"],
  ["thank you very much", "Grazie mille"],
  ["you're welcome", "prego"],
  ["excuse me", "Scusami"],
  ["yes", "si"],
  ["good night", "buona notte"],
  ["can you help me, please?", "Mi potete aiutare per favore?"]
];

export const japanesePairs = [
  ["hello", "Kon'nichiwa"],
  ["goodbye", "Sayōnara"],
  ["please", "Onegaishimasu"],
  ["thank you", "Arigatō gozaimashita"],
  ["where is the bathroom", "Keshō-shitsu wa dokodesu ka?"],
  ["you're welcome", "Dōitashimashite"],
  ["excuse me", "Sumimasen"],
  ["yes", "Hai"],
  ["good night", "Oyasuminasai"],
  ["can you help me, please?", "Tasukete moraemasu ka?"]
];

export const CardState = {
  UNSELECTED: 0,
  SELECTED: 1,
  CORRECT: 2,
  INCORRECT: 3,
}

export function createDataset(base) {
  if (base == null) {
    throw new Error('createDataset does not allow null values')
  }
  if (!Array.isArray(base)) {
    throw new Error('createDataset does not allow non arrays')
  }
  base.forEach(function(array) {
    if (array.includes(null)) {
      throw new Error ("arrays passed into createDataset may not contain null values");
    }
  });
  let baseFlattened = [].concat(...base);
  let set = new Set(baseFlattened);
  if (set.size !== baseFlattened.length) {
    throw new Error ("arrays passed into createDataset may not contain duplicate values");
  }
  let dataset = [];
  base.forEach(function(array) {
    dataset.push([
      array[0],
      {
        word: array[0],
        translation: array[1],
        state: CardState.UNSELECTED,
      }
    ],
    [
      array[1],
      {
        word: array[1],
        translation: array[0],
        state: CardState.UNSELECTED,
      }
    ]);
  });
  return new Map(dataset);
}

export let GameDataset = {
  french: frenchPairs,
  italian: italianPairs,
  japanese: japanesePairs,
}
try {
  for (var key in GameDataset) {
    GameDataset[key] = createDataset(GameDataset[key])
  }
} catch(error) {
  console.error(error.message);
  GameDataset = new Map();
}