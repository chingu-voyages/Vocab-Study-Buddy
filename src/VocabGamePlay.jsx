import React, { Component } from 'react';
import "./VocabGamePlay.scss";
import { GameDataset } from "./VocabGameData.js";
import WordCard from './WordCard';

class VocabGamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSelection: null,
      secondSelection: null,
      vocabDataSet: GameDataset,
    }
  }
  handleClick(e) {
    let { value } = e.currentTarget;
    value.isSelected = !value.isSelected;
    if (this.state.firstSelection === null) {
      this.setState({ firstSelection: value });
    }
    else if (this.state.secondSelection === null) {
      if (value === this.state.firstSelection) {
        this.setState({ firstSelection: value });
        return;
      }
      this.setState({ secondSelection: value }, () => { this.checkMatch(this.state.firstSelection, this.state.secondSelection) });
    }
  }
  checkMatch(first, second) {
    this.isCorrectUpdate(first.word === second.translation);
  }

  isCorrectUpdate(isMatch) {
    let first = this.state.firstSelection;
    let second = this.state.secondSelection;
    first.isCorrect = isMatch;
    second.isCorrect = isMatch;

    setTimeout(() => {
      this.setState({
        firstSelection: null,
        secondSelection: null,
      })
    }, 2000);
  }

  renderGameCards = (mappedObject) => {
    let renderedItems = []
    for (var value of mappedObject.values()) {
      renderedItems.push(<WordCard key={value.word} data={value} />)
    }
    return renderedItems;
  }

  render() {
    let { vocabDataSet } = this.state;
    console.log(vocabDataSet)
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
          {this.renderGameCards(vocabDataSet)}
          <div id="reset">↺</div>
        </div>
        <div id="footer">show us love</div>
      </div>
    )
  }
}

export default VocabGamePlay;
