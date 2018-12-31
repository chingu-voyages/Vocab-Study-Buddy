import React, { Component } from 'react';
import "./VocabGamePlay.scss";

class VocabGamePlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSelection: false,
      secondSelection: false,
    }
    // TEMPORARY (11 - 12)
    this.handle = this.handle.bind(this);
  }

  // TEMPORARY (16 - 26)
  handle(e) {
    if (e.target.className === "card") {
      e.target.className = "card card-select";
    } else if (e.target.className === "card card-select") {
      e.target.className = "card card-correct";
    } else if (e.target.className === "card card-correct") {
      e.target.className = "card card-incorrect";
    } else if (e.target.className === "card card-incorrect") {
      e.target.className = "card card-inactive";
    } else if (e.target.className === "card card-inactive") {
      e.target.className = "card";
    }
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
          {/* TEMPORARY (46 - 47 onClick)*/}
          <div className="card" onClick={this.handle}>hello</div>
          <div className="card" onClick={this.handle}>bonjour</div>
          <div className="card">hello</div>
          <div className="card">bonjourbonjourbonjourbonjourbonjourbonjour</div>
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