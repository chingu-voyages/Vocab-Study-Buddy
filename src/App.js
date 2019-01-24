import React, { Component } from 'react';
import "./App.scss";
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
        <div id="language-sets-container">
          { this.renderVocabButtons() }
        </div>
        <div id="header">VOCABULARY STUDY BUDDY</div>
        <div id="instructions">
          <p>
            <strong>Goal:</strong> Match each English word with its translation 
            in the currently selected language (e.g. "hello" with "hola") 
            by clicking the appropriate cards.<br />
            <br />
            Incorrect selections will flash a red border 
            while correct ones will flash a green border.<br />
            <br />
            You may reset and/or reshuffle the board at any time 
            by clicking the red reset button, 
            and you may switch between languages using 
            the buttons at the top of the page.
          </p>
        </div>
        <VocabGamePlay dataset={currentDataset} />
        <div id="footer">show us love</div>
      </div>
    );
  }
}

export default App;
