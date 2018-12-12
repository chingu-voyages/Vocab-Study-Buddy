import React, { Component } from 'react';
import "./VocabGamePlay.scss";

class VocabGamePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSelection: null,
            secondSelection: null,
        }
    }
    handleClick(i){
        if (this.state.firstSelection===null){
            //set firstSelection to word value of card
        }
        else if (this.state.secondSelection===null){
            //set secondSelection to word value of card

            //call check match function: checkMatch(this.state.firstSelection, this.state.secondSelection);
        }
    }
    checkMatch(first, second){
        //check if word value for secondSelection is equal to translation value for first selection
    }

    inCorrectMatch(){
        //set first and secondSelection to null
    }

    correctMatch(){
        //set inactive for the matched cards to false
        //set first and secondSelection to null
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
