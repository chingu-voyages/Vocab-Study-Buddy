import { createDataset, basePairs } from './VocabGameData';
import { create } from 'domain';

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

// toThrowError wants a function passed to Expect 
// to that it can execute a try/catch
// createDataset(dataset) will not work because it returns a Mapped Object
// not the function itself, thus we are using a anonymous function as line 40
describe('error handling in createDataset', () => {
  test('createDataset has null parameter', () => {
    expect(() => { return createDataset(null) }).toThrowError('null values')
  })

  test('createDataset has non-array parameter', () => {
    expect(() => { return createDataset('string') }).toThrowError('non arrays')
  })

  test('createDataset has array of nulls', () => {
    const dataset = [[null, null], [null, null]];
    expect(() => { return createDataset(dataset) }).toThrowError('null values')
  })

  test('createDataset has array of string / nulls', () => {
    const dataset = [[null, 'hola'], ['hello', null]];
    expect(() => { return createDataset(dataset) }).toThrowError('null values')
  })

  test('createDataset has duplicate parameters', () => {
    const dataset = [['hello', 'hola'], ['hello', 'buenvenido']];
    expect(() => { return createDataset(dataset) }).toThrowError('duplicate value')
  })
})