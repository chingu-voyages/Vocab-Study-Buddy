import React, { Component } from 'react';
import "./VocabGamePlay.scss";
import {GameDataset} from "./VocabGameData.js";

class VocabGamePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSelection: null,
            secondSelection: null,
            vocabDataSet: GameDataset,
        }
    }
    handleClick(e, data) {
      console.log(data);
      data.isSelected = !data.isSelected;
      if (this.state.firstSelection === null) {
        this.setState({ firstSelection: data });
      }
      else if (this.state.secondSelection === null) {
        if (data === this.state.firstSelection) {
          this.setState({ firstSelection: data });
          return;
        }
        this.setState({ secondSelection: data }, () => { this.checkMatch(this.state.firstSelection, this.state.secondSelection) });
      }
    }
    checkMatch(first, second){
       this.isCorrectUpdate(first.word===second.translation);
    }

    isCorrectUpdate(isMatch){
        let first=this.state.firstSelection;
        let second=this.state.secondSelection;
        first.isCorrect=isMatch;
        second.isCorrect=isMatch;

        setTimeout(()=> {this.setState({
            firstSelection: null,
            secondSelection: null,
        })}, 2000);
    }
    

  render() {
    return (
      <div className="vocabGamePlay--container">
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
        <div id="card-grid-container">
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjour</div>
          <div id="reset">↺</div>
        </div>
        <div id="footer">show us love</div>
      </div>
    )
  }
}

export default VocabGamePlay;
