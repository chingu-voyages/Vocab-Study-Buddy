import React from 'react';
import { shallow, mount } from 'enzyme';
import VocabGamePlay from './VocabGamePlay';
import { GameDataset } from './VocabGameData';

describe('clicking cards saves to state', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<VocabGamePlay />);
  })
  afterEach(() => {
    wrapper.unmount();
  })
  test('first card saves to state', () => {
    let firstItem = GameDataset.get('hello');
    wrapper.find('.card').at(0).simulate('click');
    expect(wrapper.state().firstSelection).toEqual(firstItem)
  })
  
  test('clicking card twice nulls selection', () => {;
    wrapper.find('.card').at(0).simulate('click');
    wrapper.find('.card').at(0).simulate('click');
    expect(wrapper.state().firstSelection).toEqual(null)
  })
});

describe('card matches changes data objects', () => {
  let wrapper;
  let firstItem = GameDataset.get('hello');
  let secondItem = GameDataset.get('bonjour');
  beforeEach(() => {
    wrapper = mount(<VocabGamePlay />);
    wrapper.find('.card').at(0).simulate('click');
    wrapper.find('.card').at(1).simulate('click');
  })
  afterEach(() => {
    wrapper.unmount();
  })
  test('first and second card saves to state', () => {
    expect(wrapper.state().firstSelection).toEqual(firstItem)
    expect(wrapper.state().secondSelection).toEqual(secondItem)
  })
  // test('first and second card are a match', () => {
  //   expect(wrapper.state().firstSelection).toEqual(firstItem)
  //   expect(wrapper.state().secondSelection).toEqual(secondItem)
  // })
  // test('first and third card are not a match', () => {
  //   expect(wrapper.state().firstSelection).toEqual(firstItem)
  //   expect(wrapper.state().secondSelection).toEqual(secondItem)
  // })
})
