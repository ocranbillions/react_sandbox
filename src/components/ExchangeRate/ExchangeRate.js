import React, { Component } from 'react';
import './style.css'

class ExchangeRate extends Component {
    constructor(props) {
        super(props);

        this.state = {
          currency_one: 'USD',
          currency_two: 'EUR',
          currency_one_amount: 1,
          currency_two_amount: 0,
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
        fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[this.state.currency_two];
            this.setState({
                ...this.state,
                currency_two_amount: (this.state.currency_one_amount * rate).toFixed(2)
            })
        });
    }

    swapCurrencies = () => {
        const temp = this.state.currency_one;
        this.setState({
            ...this.state,
            currency_one: this.state.currency_two,
            currency_two: temp,
        }, () => this.getRate())
    }

    
    render() {
        return (
            <div className='app-body'>
                <img src="img/money.png" alt="" className="money-img" />
                <h1>Exchange Rate Calculator</h1>
                <p>Choose the currency and the amounts to get the exchange rate</p>

                <div className="container">
                    {/* <Currency id={'currency_one'} setCurrency={this.setCurrency}/> */}
                    <div className="currency">
                        <select id="currency_one" value={this.state.currency_one} onChange={this.setCurrency}>
                            <option value="AED">AED</option>
                            <option value="ARS">ARS</option>
                            <option value="AUD">AUD</option>
                            <option value="BGN">BGN</option>
                            <option value="BRL">BRL</option>
                            <option value="BSD">BSD</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CLP">CLP</option>
                            <option value="CNY">CNY</option>
                            <option value="COP">COP</option>
                            <option value="CZK">CZK</option>
                            <option value="DKK">DKK</option>
                            <option value="DOP">DOP</option>
                            <option value="EGP">EGP</option>
                            <option value="EUR">EUR</option>
                            <option value="FJD">FJD</option>
                            <option value="GBP">GBP</option>
                            <option value="GTQ">GTQ</option>
                            <option value="HKD">HKD</option>
                            <option value="HRK">HRK</option>
                            <option value="HUF">HUF</option>
                            <option value="IDR">IDR</option>
                            <option value="ILS">ILS</option>
                            <option value="INR">INR</option>
                            <option value="ISK">ISK</option>
                            <option value="JPY">JPY</option>
                            <option value="KRW">KRW</option>
                            <option value="KZT">KZT</option>
                            <option value="MXN">MXN</option>
                            <option value="MYR">MYR</option>
                            <option value="NOK">NOK</option>
                            <option value="NZD">NZD</option>
                            <option value="PAB">PAB</option>
                            <option value="PEN">PEN</option>
                            <option value="PHP">PHP</option>
                            <option value="PKR">PKR</option>
                            <option value="PLN">PLN</option>
                            <option value="PYG">PYG</option>
                            <option value="RON">RON</option>
                            <option value="RUB">RUB</option>
                            <option value="SAR">SAR</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="THB">THB</option>
                            <option value="TRY">TRY</option>
                            <option value="TWD">TWD</option>
                            <option value="UAH">UAH</option>
                            <option value="USD">USD</option>
                            <option value="UYU">UYU</option>
                            <option value="VND">VND</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                        <input type="number" id="currency_one_amount" placeholder="0" value={this.state.currency_one_amount} onInput={this.setCurrencyAmount}/>
                    </div>

                    <div className="swap-rate-container">
                        <button className="btn" id="swap" onClick={this.swapCurrencies}>
                        Swap
                        </button>
                        <div className="rate" id="rate">{`1 ${this.state.currency_one} = ${this.state.currency_two_amount} ${this.state.currency_two}`}</div>
                    </div>

                    <div className="currency">
                        <select id="currency_two" value={this.state.currency_two} onChange={this.setCurrency}>
                            <option value="AED">AED</option>
                            <option value="ARS">ARS</option>
                            <option value="AUD">AUD</option>
                            <option value="BGN">BGN</option>
                            <option value="BRL">BRL</option>
                            <option value="BSD">BSD</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CLP">CLP</option>
                            <option value="CNY">CNY</option>
                            <option value="COP">COP</option>
                            <option value="CZK">CZK</option>
                            <option value="DKK">DKK</option>
                            <option value="DOP">DOP</option>
                            <option value="EGP">EGP</option>
                            <option value="EUR">EUR</option>
                            <option value="FJD">FJD</option>
                            <option value="GBP">GBP</option>
                            <option value="GTQ">GTQ</option>
                            <option value="HKD">HKD</option>
                            <option value="HRK">HRK</option>
                            <option value="HUF">HUF</option>
                            <option value="IDR">IDR</option>
                            <option value="ILS">ILS</option>
                            <option value="INR">INR</option>
                            <option value="ISK">ISK</option>
                            <option value="JPY">JPY</option>
                            <option value="KRW">KRW</option>
                            <option value="KZT">KZT</option>
                            <option value="MXN">MXN</option>
                            <option value="MYR">MYR</option>
                            <option value="NOK">NOK</option>
                            <option value="NZD">NZD</option>
                            <option value="PAB">PAB</option>
                            <option value="PEN">PEN</option>
                            <option value="PHP">PHP</option>
                            <option value="PKR">PKR</option>
                            <option value="PLN">PLN</option>
                            <option value="PYG">PYG</option>
                            <option value="RON">RON</option>
                            <option value="RUB">RUB</option>
                            <option value="SAR">SAR</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="THB">THB</option>
                            <option value="TRY">TRY</option>
                            <option value="TWD">TWD</option>
                            <option value="UAH">UAH</option>
                            <option value="USD">USD</option>
                            <option value="UYU">UYU</option>
                            <option value="VND">VND</option>
                            <option value="ZAR">ZAR</option>
                        </select>
                        <input type="number" id="currency_two_amount" placeholder="0" value={this.state.currency_two_amount} onInput={this.setCurrencyAmount}/>
                    </div>
                </div>             
            </div>
        )
    }
}

export default ExchangeRate;
