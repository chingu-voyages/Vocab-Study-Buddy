import React, { Component } from 'react';
import "./VocabGamePlay.scss";
import WordCard from './WordCard';

class VocabGamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSelection: null,
      secondSelection: null,
      shuffledDataSet: null,
    }
  }

  componentWillMount() {
    this.setState({ shuffledDataSet: this.shuffleGameCards(this.props.dataset) })
  }
  
  handleStateToggle = (wordObject, state) => {
    wordObject[state] = !wordObject[state];
  }

  handleClick = (e, data) => {
    e.preventDefault();

    let { firstSelection, secondSelection } = this.state;
    if (data.isCorrect) { return ; } // ignores correct cards
    if (firstSelection === null) {
      if (data.isCorrect) { return ; } 
      this.handleStateToggle(data, 'isSelected');
      this.setState({ firstSelection: data });
    } else if (secondSelection === null) {
      if (data === firstSelection) {
        this.handleStateToggle(firstSelection, 'isSelected');
        this.setState({ firstSelection: null });
        return;
      }
      this.handleStateToggle(data, 'isSelected');
      this.setState({ secondSelection: data }, () => { 
        this.checkMatch(this.state.firstSelection, this.state.secondSelection) 
      });
    }
    
  }
  
  checkMatch = (first, second) => {
    let isMatchOrNot = first.word === second.translation;
    first.isCorrect = isMatchOrNot;
    second.isCorrect = isMatchOrNot;

    console.log({ isMatchOrNot, first: first.isCorrect, second: second.isCorrect })

    setTimeout(() => {
      if (!isMatchOrNot) {
        first.isSelected = false;
        second.isSelected = false;
      }
      this.setState({
        firstSelection: null,
        secondSelection: null,
      })
    }, 2000);
  }

  resetGame = (mappedObject) => {
    for (var value of mappedObject.values()) {
      value.isCorrect = false;
      value.isSelected = false;
    }
    this.setState({ shuffledDataSet: this.shuffleGameCards(mappedObject) })
  }

  shuffleGameCards = (mappedObject) => {
    if (!mappedObject) { return }
    let array = Array.from(mappedObject);
    let currentIdx = array.length;
    let temporaryValue, randomIdx;
    while (0 !== currentIdx) {
      randomIdx = Math.floor(Math.random() * currentIdx);
      currentIdx -= 1;

      temporaryValue = array[currentIdx];
      array[currentIdx] = array[randomIdx];
      array[randomIdx] = temporaryValue;
    }
    return new Map(array);
  }

  renderGameCards = (mappedObject) => {
    let renderedItems = [];
    function determineColor(selected, correct) {
      if (selected && correct) {
        return "card-correct";
      } else if (this.state.secondSelection && selected && !correct) {
        return "card-incorrect";
      } else if (selected) {
        return "card-select";
      } 
    }
    for (var value of mappedObject.values()) {
      let color = determineColor.call(this, value.isSelected, value.isCorrect);
      renderedItems.push(
        <WordCard 
          className={`card ${color}`}
          key={value.word} 
          data={value} 
          handleClick={this.handleClick} 
        />
      );
    }
    return renderedItems;
  }

  render() {
    let { shuffledDataSet } = this.state;
    console.log(shuffledDataSet)
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
          {shuffledDataSet && this.renderGameCards(shuffledDataSet)}
          <div id="reset" onClick={() => this.resetGame(shuffledDataSet)}>↺</div>
        </div>
        <div id="footer">show us love</div>
      </div>
    )
  }
}

export default VocabGamePlay;
