import React, { Component } from 'react'
import Seat from './Seat';
import './style.css'


class MovieSeatBooker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSelectedSeats: 0,
            totalOccupiedSeats: 4,
            totalAmount: 0,
            priceOfSelectedMovie: 10,
            selectedSeatsIndexes: [],
        }; 
    }

    countSelectedSeats = (value) => {
        this.setState({
            ...this.state,
            totalSelectedSeats: (this.state.totalSelectedSeats + value)
        })
    }

    selectMovie = (event) => {
        this.setState({
            ...this.state,
            priceOfSelectedMovie: event.target.value,
        })
    }

    updateSelectedSeatsArray = (seatId, action) => {
        if(action === 'addItem') {
            this.state.selectedSeatsIndexes.push(seatId);
        }else if(action === 'removeItem') {
            const index = this.state.selectedSeatsIndexes.indexOf(seatId);
            this.state.selectedSeatsIndexes.splice(index, 1);
        }
    }

    render() {
        return (
            <div className="app-body">
                <div className="container">
                    <div className="movie-container">
                        <label>Pick a movie:</label>
                        <select id="movie" onChange={this.selectMovie}>
                            <option value="10">Avengers: Endgame ($10)</option>
                            <option value="12">Joker ($12)</option>
                            <option value="8">Toy Story 4 ($8)</option>
                            <option value="9">The Lion King ($9)</option>
                        </select>
                    </div>

                    <ul className="showcase">
                        <li>
                            <div className="seat"></div>
                            <small>N/A</small>
                        </li>
                        <li>
                            <div className="seat selected"></div>
                            <small>Selected</small>
                        </li>
                        <li>
                            <div className="seat occupied"></div>
                            <small>Occupied</small>
                        </li>
                    </ul>

                    <div className="container">
                        <div className="screen"></div>

                        <div className="row">
                            <Seat id={1} countSelectedSeats={this.countSelectedSeats} updateSelectedSeatsArray={this.updateSelectedSeatsArray}/>
                            <Seat id={2} countSelectedSeats={this.countSelectedSeats} updateSelectedSeatsArray={this.updateSelectedSeatsArray}/>
                            <Seat id={3} countSelectedSeats={this.countSelectedSeats} updateSelectedSeatsArray={this.updateSelectedSeatsArray}/>
                            <Seat id={4} countSelectedSeats={this.countSelectedSeats} updateSelectedSeatsArray={this.updateSelectedSeatsArray}/>
                            <Seat id={5} countSelectedSeats={this.countSelectedSeats} updateSelectedSeatsArray={this.updateSelectedSeatsArray}/>
                            <Seat id={6} countSelectedSeats={this.countSelectedSeats} updateSelectedSeatsArray={this.updateSelectedSeatsArray} occupied={true}/>
                            <Seat id={7} countSelectedSeats={this.countSelectedSeats} updateSelectedSeatsArray={this.updateSelectedSeatsArray} occupied={true} />
                            <Seat id={8} countSelectedSeats={this.countSelectedSeats} updateSelectedSeatsArray={this.updateSelectedSeatsArray}/>
                        </div>
                    </div>

                    <p className="text">
                        You have selected <span id="count">{this.state.totalSelectedSeats} </span> 
                            seats for a price of $<span id="total">{this.state.totalSelectedSeats * this.state.priceOfSelectedMovie}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default MovieSeatBooker;