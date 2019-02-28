import react from "react";
import Square from"./Square";
import Board from "./Board";

class Game extends react.Component{
    constructor(prop){
        super(props);
        this.state = {
        history : [{
            Squares:Array(9).fill(null),
        }],
        xIsNext :true,
        };
    }
handleClick(i){
       const history = this. 
       return;
    }

render(){
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner =  props.calculateWinner(current.Squares);


    let status;
    if(winner){
        status = 'winner: '+ winner;
    } else {
     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

        retrun(
        <div className="game">
         <div className="game-board">
            <Board
            Squares={current.Squares}
            onClick={(i) => this.handleClick(i)}  
            /> 
          </div>
          <div className="game-info">
              <div>{status }</div>
              <ol>{/* TODO */}</ol>
              </div>
        </div>    
    );
}




}