import React, { Component } from 'react'
import Seat from './Seat';
import './style.css'


class MovieSeatBooker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalSelectedSeats: 0,
            totalOccupiedSeats: 4,
            priceOfSelectedMovie: "10",
            selectedSeats: [],
        }; 
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            selectedSeats: (JSON.parse(localStorage.getItem('selectedSeats')) !== null) ? JSON.parse(localStorage.getItem('selectedSeats')) : [],
            priceOfSelectedMovie: (JSON.parse(localStorage.getItem('priceOfSelectedMovie')) !== null) ? JSON.parse(localStorage.getItem('priceOfSelectedMovie')) : "10",
            
            // Set totalSelectedSeats after selectedSeats state has been updated from localStorage
        }, () => this.setState({totalSelectedSeats: this.state.selectedSeats.length,}))
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
           }, () => {
                localStorage.setItem('priceOfSelectedMovie', JSON.stringify(this.state.priceOfSelectedMovie))
           })
    }

    updateSelectedSeatsArray = (seatId, action) => {
        if(action === 'addItem') {
            this.state.selectedSeats.push(seatId);

            localStorage.setItem('selectedSeats', JSON.stringify(this.state.selectedSeats));
        }else if(action === 'removeItem') {
            const index = this.state.selectedSeats.indexOf(seatId);
            this.state.selectedSeats.splice(index, 1);

            localStorage.setItem('selectedSeats', JSON.stringify(this.state.selectedSeats));
        }
    }

    render() {
        const { priceOfSelectedMovie } = this.state;
        return (
            <div className="app-body">
                <div className="container">
                    <div className="movie-container">
                        <label>Pick a movie:</label>
                        <select id="movie" onChange={this.selectMovie}>
                            <option value="10" selected={priceOfSelectedMovie === "10"}>Avengers: Endgame ($10)</option>
                            <option value="12" selected={priceOfSelectedMovie === "12"}>Joker ($12)</option>
                            <option value="8" selected={priceOfSelectedMovie === "8"}>Toy Story 4 ($8)</option>
                            <option value="9" selected={priceOfSelectedMovie === "9"}>The Lion King ($9)</option>
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
                            <Seat
                                id={1}
                                countSelectedSeats={this.countSelectedSeats}
                                updateSelectedSeatsArray={this.updateSelectedSeatsArray}
                                selectedSeats={this.state.selectedSeats}
                            />
                            <Seat
                                id={2}
                                countSelectedSeats={this.countSelectedSeats}
                                updateSelectedSeatsArray={this.updateSelectedSeatsArray}
                                selectedSeats={this.state.selectedSeats}
                            />
                            <Seat
                                id={3}
                                countSelectedSeats={this.countSelectedSeats}
                                updateSelectedSeatsArray={this.updateSelectedSeatsArray}
                                selectedSeats={this.state.selectedSeats}
                            />
                            <Seat
                                id={4}
                                countSelectedSeats={this.countSelectedSeats}
                                updateSelectedSeatsArray={this.updateSelectedSeatsArray}
                                selectedSeats={this.state.selectedSeats}
                            />
                            <Seat
                                id={5}
                                countSelectedSeats={this.countSelectedSeats}
                                updateSelectedSeatsArray={this.updateSelectedSeatsArray}
                                selectedSeats={this.state.selectedSeats}
                            />
                            <Seat
                                id={6}
                                countSelectedSeats={this.countSelectedSeats}
                                updateSelectedSeatsArray={this.updateSelectedSeatsArray}
                                selectedSeats={this.state.selectedSeats}
                                occupied={true}
                            />
                            <Seat
                                id={7}
                                countSelectedSeats={this.countSelectedSeats}
                                updateSelectedSeatsArray={this.updateSelectedSeatsArray}
                                selectedSeats={this.state.selectedSeats}
                                occupied={true}
                            />
                            <Seat
                                id={8}
                                countSelectedSeats={this.countSelectedSeats}
                                updateSelectedSeatsArray={this.updateSelectedSeatsArray}
                                selectedSeats={this.state.selectedSeats}
                            />
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