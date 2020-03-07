import React, { Component } from 'react'
import './styles.css'

class FormValidator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',

            incorrectUsername: null,
            incorrectEmail: null,
            incorrectPassword: null,
            incorrectPassword2: null,
        };
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
                    username: value,
                    incorrectUsername: validUsername ? '' : 'Username must be at least 3',
                })
                break;
            case 'email':
                const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                this.setState({
                    email: value,
                    incorrectEmail: emailValid ? '' : 'Email is invalid',
                })
                break;
            case 'password':
                const validPassword = (value.length >= 6);
                this.setState({
                    password: value,
                    incorrectPassword: validPassword ? '' : 'Password must be at least 6 characters',
                })
                break;
            case 'password2':
                const validPassword2 = (value === this.state.password);
                this.setState({
                    password2: value,
                    incorrectPassword2: validPassword2 ? '' : 'Passwords do not match',
                })
                break;
          default:
            break;
        }
        
    }

    handleFormSubmission = (event) => {
        event.preventDefault();
        console.log(this.state)
        const { 
            incorrectUsername,
            incorrectEmail, 
            incorrectPassword, 
            incorrectPassword2 } = this.state;

        if(incorrectUsername === "" && 
            incorrectEmail === "" && 
            incorrectPassword === "" && 
            incorrectPassword2 === "")
        {
            alert('success')
        } else {
            alert('incorrect form fields')
        }
    }


    render() {
        const {
            username, email,
            password, password2,
            incorrectUsername, 
            incorrectEmail,
            incorrectPassword, 
            incorrectPassword2 } = this.state;


        return (
            <div className="container">
                <form id="form" className="form" onSubmit={this.handleFormSubmission}>
                    <h2>Register With Us</h2>
                    <div className={`form-control${incorrectUsername ? ' error' : ''}`}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter username" value={username} onChange={this.handleInputChange}/>
                        <small>{incorrectUsername}</small>
                    </div>
                    <div className={`form-control${incorrectEmail ? ' error' : ''}`}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Enter email" value={email} onChange={this.handleInputChange}/>
                        <small>{incorrectEmail}</small>
                    </div>
                    <div className={`form-control${incorrectPassword ? ' error' : ''}`}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" value={password} onChange={this.handleInputChange}/>
                        <small>{incorrectPassword}</small>
                    </div>
                    <div className={`form-control${incorrectPassword2 ? ' error' : ''}`}>
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            type="password"
                            id="password2"
                            placeholder="Enter password again"
                            value={password2}
                            onChange={this.handleInputChange}
                        />
                        <small>{incorrectPassword2}</small>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormValidator;