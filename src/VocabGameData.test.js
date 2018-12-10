import { createDataset, basePairs } from './VocabGameData';

describe('dataset is Map type', () => {
  const datasetMap = createDataset(basePairs);

  test('dataset was correctly converted to Map by checking Map Size', () => {
    const initialLength = basePairs.length;
    expect(datasetMap.size).toEqual(initialLength * 2);
  })
  
  test('dataset was correctly converted to Map and has valid property', () => {
    const testValue = basePairs[0][0];
    expect(datasetMap.has(testValue)).toEqual(true);
  })
  
  test('dataset can update map object by changing status', () => {
    let cardReference = datasetMap.get('hello');
    cardReference.isSelected = true;
    datasetMap.set('hello', cardReference)
    expect(datasetMap.get('hello')).toEqual({"isCorrect": null, "isSelected": true, "translation": "bonjour", "word": "hello"});
  })
  
  afterAll(() => {
    datasetMap.clear();
  })
})
