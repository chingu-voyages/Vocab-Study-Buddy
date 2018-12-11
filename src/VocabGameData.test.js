import { createDataset, basePairs } from './VocabGameData';

describe('createDataset generates a Map type', () => {
  const datasetMap = createDataset(basePairs);

  test('dataset was correctly converted to Map by checking Map Size', () => {
    const initialLength = basePairs.length;
    expect(datasetMap.size).toEqual(initialLength * 2);
  })
  
  test('dataset was correctly converted to Map and has valid property', () => {
    const testValue = basePairs[0][0];
    expect(datasetMap.has(testValue)).toEqual(true);
  })

  test('dataset has correct word pairs', () => {
    const firstWord = basePairs[0][0];
    const secondWord = basePairs[0][1];
    expect(datasetMap.get(firstWord)).toHaveProperty('translation', secondWord);
    expect(datasetMap.get(secondWord)).toHaveProperty('translation', firstWord);
  })
  
  afterAll(() => {
    datasetMap.clear();
  })
})

describe('error handling in createDataset', () => {
  test('createDataset has null parameter', () => {
    expect(createDataset(null)).toThrowError('null values')
  })

  test('createDataset has array of nulls', () => {
    const dataset = [[null, null], [null, null]];
    expect(createDataset(dataset)).toThrowError('null values')
  })

  test('createDataset has array of string / nulls', () => {
    const dataset = [[null, 'hola'], ['hello', null]];
    expect(createDataset(dataset)).toThrowError('null values')
  })

  test('createDataset has duplicate parameters', () => {
    const dataset = [['hello', 'hola'], ['hello', 'buenvenido']];
    expect(createDataset(dataset)).toThrowError('duplicate value')
  })
})