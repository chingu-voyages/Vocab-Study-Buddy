import React, { Component } from 'react';
import VocabGamePlay from "./VocabGamePlay";
import { GameDataset } from "./VocabGameData.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <VocabGamePlay dataset={GameDataset} />
      </div>
    );
  }
}

export default App;
