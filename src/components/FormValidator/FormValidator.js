import React, { Component } from 'react'
import './styles.css'

const initialState = {
    username: '',
    email: '',
    password: '',
    password2: '',

    usernameError: null,
    emailError: null,
    passwordError: null,
    password2Error: null,

    disableSubmit: true,
};


class FormValidator extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleInputChange = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        this.validateField(field, value)
    }

    validateField(fieldName, value) {
      
        switch(fieldName) {
            case 'username':
                const validUsername = (value.length >= 3);
                this.setState({
                    ...this.state,
                    username: value,
                    usernameError: validUsername ? '' : 'Username must be at least 3',
                }, () => { this.checkButtonState() })
                break;
            case 'email':
                const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                this.setState({
                    ...this.state,
                    email: value,
                    emailError: emailValid ? '' : 'Email is invalid',
                }, () => { this.checkButtonState() })
                break;
            case 'password':
                const validPassword = (value.length >= 6);
                this.setState({
                    ...this.state,
                    password: value,
                    passwordError: validPassword ? '' : 'Password must be at least 6 characters',
                    password2Error: (value === this.state.password2) ? '' : 'Passwords do not match',
                }, () => { this.checkButtonState() })

                break;
            case 'password2':
                const validPassword2 = (value === this.state.password);
                this.setState({
                    ...this.state,
                    password2: value,
                    password2Error: validPassword2 ? '' : 'Passwords do not match',
                }, () => { this.checkButtonState() })
                break;
          default:
            break;
        }
    }

    checkButtonState = () => {
        const { 
            usernameError,
            emailError, 
            passwordError, 
            password2Error } = this.state;

        // Enable submit button if no errors in user inputs
        if(usernameError === "" && 
            emailError === "" && 
            passwordError === "" && 
            password2Error === "")
        {
            this.setState({
                ...this.state,
                disableSubmit: false,
            })

        } else {
            this.setState({
                ...this.state,
                disableSubmit: true,
            })
        }
    }

    handleFormSubmission = (event) => {
        event.preventDefault();

        // clear fields
        this.setState(initialState)
        alert('success')


        // const { 
        //     usernameError,
        //     emailError, 
        //     passwordError, 
        //     password2Error } = this.state;

        // if(usernameError === "" && 
        //     emailError === "" && 
        //     passwordError === "" && 
        //     password2Error === "")
        // {
        //     // clear fields
        //     this.setState(initialState)
        //     alert('success')

        // } else {
        //     alert('incorrect form fields')
        // }
    }


    render() {
        const {
            username, email,
            password, password2,
            usernameError, 
            emailError,
            passwordError, 
            password2Error } = this.state;


        return (
            <div className="container">
                <form id="form" className="form" onSubmit={this.handleFormSubmission}>
                    <h2>Register With Us</h2>
                    <div className={`form-control${usernameError ? ' error' : ''}`}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter username" value={username} onChange={this.handleInputChange}/>
                        <small>{usernameError}</small>
                    </div>
                    <div className={`form-control${emailError ? ' error' : ''}`}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Enter email" value={email} onChange={this.handleInputChange}/>
                        <small>{emailError}</small>
                    </div>
                    <div className={`form-control${passwordError ? ' error' : ''}`}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" value={password} onChange={this.handleInputChange}/>
                        <small>{passwordError}</small>
                    </div>
                    <div className={`form-control${password2Error ? ' error' : ''}`}>
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            type="password"
                            id="password2"
                            placeholder="Enter password again"
                            value={password2}
                            onChange={this.handleInputChange}
                        />
                        <small>{password2Error}</small>
                    </div>
                    {/* <button type="submit">Submit</button> */}
                    <button type="submit" disabled={this.state.disableSubmit} className={`${this.state.disableSubmit ? 'disabled' : 'enabled'}`}>Submit</button>
                </form> 
            </div>
        )
    }
}

export default FormValidator;