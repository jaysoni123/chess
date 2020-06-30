import React, { Component } from 'react'
import ChessPictures from "./chess_pictures"
import "./bootstrap.min.css"
import "./chess_board.css"

export default class chess_board1 extends Component {

    state = {
        size: 800
    }
    
    printChessBoard = () => {
        let board =[];
        let cell_style;
        for(let i = 1; i <= 8; i++) {
            for(let j = 1; j <= 8; j++) {
                
                if(i%2 === 1 && j%2 === 1) {      // all odd row & odd column
                    cell_style = {
                        width: (this.state.size/8)+"px",
                        height: (this.state.size/8)+"px",
                        border: "1px solid black",
                        display: "inline-block",
                        backgroundColor: "white"
                    };
                }

                if(i%2 === 1 && j%2 === 0) {      // all odd row & even column
                    cell_style = {
                        width: (this.state.size/8)+"px",
                        height: (this.state.size/8)+"px",
                        border: "1px solid black",
                        display: "inline-block",
                        backgroundColor: "black"
                    };
                }

                if(i%2 === 0 && j%2 === 1) {      // all even row & odd column
                    cell_style = {
                        width: (this.state.size/8)+"px",
                        height: (this.state.size/8)+"px",
                        border: "1px solid black",
                        display: "inline-block",
                        backgroundColor: "black"
                    };
                }

                if(i%2 === 0 && j%2 === 0) {      // all even row & even column
                    cell_style = {
                        width: (this.state.size/8)+"px",
                        height: (this.state.size/8)+"px",
                        border: "1px solid black",
                        display: "inline-block",
                        backgroundColor: "white"
                    };
                }

                if(i === 1) {
                    board.push(<div style = {cell_style}><img src={ChessPictures.black_army.commander[j - 1]} alt={ChessPictures.black_army.commander[j - 1]} width={(this.state.size/8)+"px"} height={(this.state.size/8)+"px"} /></div>);
                }else if(i === 2) {
                    board.push(<div style = {cell_style}><img src={ChessPictures.black_army.pawn[0]} alt={ChessPictures.black_army.pawn[0]} width={(this.state.size/8)+"px"} height={(this.state.size/8)+"px"} /></div>);
                }else if(i === 7) {
                    board.push(<div style = {cell_style}><img src={ChessPictures.white_army.pawn[0]} alt={ChessPictures.white_army.pawn[0]} width={(this.state.size/8)+"px"} height={(this.state.size/8)+"px"} /></div>);
                }else if(i === 8) {
                    board.push(<div style = {cell_style}><img src={ChessPictures.white_army.commander[j - 1]} alt={ChessPictures.white_army.commander[j - 1]} width={(this.state.size/8)+"px"} height={(this.state.size/8)+"px"} /></div>);
                }else {
                    board.push(<div style = {cell_style}><img alt="" /></div>);
                }
                
            }
        }
        return board;
    }

    render() {
        return (
            <div className="justify-content-center row">
                <div style={{
                    width: (parseInt(this.state.size)+6)+"px",
                    height: (parseInt(this.state.size)+6)+"px",
                    border: "3px solid black"
                }}>
                    {this.printChessBoard()}
                </div>
                <div className="mt-3 font-weight-bold">
                    <input type="range" className="rotated my-5" min="200" max="800" value={this.state.size} onChange={(e) => {
                        this.setState({size : e.target.value});
                    }} />
                    <label>Width :<span  className="text-danger mx-2">{this.state.size} px</span></label>
                </div>
            </div>
        )
    }
}
