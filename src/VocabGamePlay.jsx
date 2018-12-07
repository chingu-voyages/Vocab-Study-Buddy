import React, { Component } from 'react';

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
    }
}