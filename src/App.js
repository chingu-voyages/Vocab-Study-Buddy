import React, { Component } from 'react';
import VocabGamePlay from "./VocabGamePlay";
import { GameDataset } from "./VocabGameData.js";

console.log(GameDataset)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDataset: GameDataset.italian,
      currentDatasetName: 'italian',
    }
  }
  renderVocabButtons = () => {
    let buttons = [];
    for (var key in GameDataset) {
      buttons.push(
        <button
          type='button'
          name={key}
          key={key}
          className='dataset-btn'
          autoFocus={this.state.currentDatasetName === key} // currently selected
          onClick={(e) => this.changeGameDataset(e)}
        >
        {key}
        </button>
      )
    }
    return buttons;
  }
  changeGameDataset = (e) => {
    e.preventDefault();
    let { name } = e.currentTarget;
    this.setState({ currentDataset: GameDataset[name], currentDatasetName: name });
  }

  render() {
    let { currentDataset } = this.state;
    return (
      <div className="App">
        { this.renderVocabButtons() }
        <VocabGamePlay dataset={currentDataset} />
      </div>
    );
  }
}

export default App;
