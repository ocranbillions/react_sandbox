import React, { Component } from 'react'

class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            occupied: this.props.occupied ? true : false,
        }; 
    }

    toggleSelect = () => {
        this.setState({
            ...this.state,
            selected: !this.state.selected,
        }, () => this.updateSelectedSeatsCount())
    }

    updateSelectedSeatsCount = () => {
        // Increase count only if selected
        // and not occupied
        if(this.state.selected && !this.state.occupied) {
            this.props.countSelectedSeats(1)

            // Add seat to selectedSeats Array
            this.props.updateSelectedSeatsArray(this.props.id, 'addItem')
        } else if(!this.state.occupied){
            this.props.countSelectedSeats(-1)

            // Remove seat from selectedSeats array
            this.props.updateSelectedSeatsArray(this.props.id, 'removeItem')
        }
    }

    render() {
        const { selected, occupied } = this.state;
        return (
            <div className={`seat ${selected ? 'selected' : ''} ${occupied ? 'occupied' : ''}`} onClick={this.toggleSelect}></div>
        )
    }
}

export default Seat;