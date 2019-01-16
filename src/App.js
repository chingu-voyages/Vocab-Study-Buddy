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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed feugiat neque quis ultricies rutrum. Sed ornare eu sapien a luctus.
            Nullam nulla enim, vulputate in arcu nec, volutpat lobortis enim.
            Nam nec finibus lorem, vitae tincidunt metus.
            Cras fermentum erat vel massa finibus malesuada.
            Maecenas quis luctus est.
            Curabitur cursus ante eget nisl rutrum, in vulputate lacus scelerisque.
            Praesent et vulputate lectus. Aenean mi purus, tincidunt eu semper eget,
            efficitur vitae justo. Etiam nec rhoncus elit, vitae lacinia velit.
          </p>
        </div>
        <VocabGamePlay dataset={currentDataset} />
        <div id="footer">show us love</div>
      </div>
    );
  }
}

export default App;
