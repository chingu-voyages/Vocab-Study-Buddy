import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VocabGamePlay from './VocabGamePlay';
import { GameDataset } from './VocabGameData';

configure({ adapter: new Adapter() });

test('State Change', () => {
  const wrapper = shallow(<VocabGamePlay />);
  wrapper.state().firstSelection = GameDataset.get('hello');
  wrapper.state().secondSelection = GameDataset.get('hola');

})

