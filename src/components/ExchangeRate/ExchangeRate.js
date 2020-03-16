import React, { Component } from 'react';
import CurrencySelector from './CurrencySelector';
import './style.css'

class ExchangeRate extends Component {
    constructor(props) {
        super(props);

        this.state = {
          currency_one_symbol: 'USD',
          currency_two_symbol: 'EUR',
          currency_one_amount: 1,
          currency_two_amount: 0,
          rate: 0,
        };
      }
    
    componentDidMount() {
        this.getRate();
    }

    setCurrency = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        }, () => this.getRate())
    }

    setCurrencyAmount = (event) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value,
        }, () => this.getRate())
    }

    getRate = () => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.currency_one_symbol}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[this.state.currency_two_symbol];
            this.setState({
                ...this.state,
                rate: rate,
                currency_two_amount: (this.state.currency_one_amount * rate).toFixed(2)
            })
        });
    }

    swapCurrencies = () => {
        const temp = this.state.currency_one_symbol;
        this.setState({
            ...this.state,
            currency_one_symbol: this.state.currency_two_symbol,
            currency_two_symbol: temp,
        }, () => this.getRate())
    }

    
    render() {
        return (
            <div className='app-body'>
                <img src="img/money.png" alt="" className="money-img" />
                <h1>Exchange Rate Calculator</h1>
                <p>Choose the currency and the amounts to get the exchange rate</p>

                <div className="container">
                    <CurrencySelector
                     id={'currency_one_symbol'}
                     currencyAmountInputId={'currency_one_amount'}
                     setCurrency={this.setCurrency}
                     currency_symbol={this.state.currency_one_symbol}
                     setCurrencyAmount={this.setCurrencyAmount}
                     currency_amount={this.state.currency_one_amount}
                    />
                    
                    <div className="swap-rate-container">
                        <button className="btn" id="swap" onClick={this.swapCurrencies}>
                            Swap
                        </button>
                        <div className="rate" id="rate">{`1 ${this.state.currency_one_symbol} = ${this.state.rate} ${this.state.currency_two_symbol}`}</div>
                    </div>

                    <CurrencySelector
                     id={'currency_two_symbol'}
                     currencyAmountInputId={'currency_two_amount'}
                     setCurrency={this.setCurrency}
                     currency_symbol={this.state.currency_two_symbol}
                     setCurrencyAmount={this.setCurrencyAmount}
                     currency_amount={this.state.currency_two_amount}
                    />
                </div>             
            </div>
        )
    }
}

export default ExchangeRate;
