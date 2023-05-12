import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        // When trying to Sign in, We do a post request and because
        // and because fetch by default does a guest request, we pass and object {}
        // in the second parameter that describes what the request will be
        fetch('http://localhost:3001/signin', {
            method: "post",
            headers: {"Content-Type": "application/json"},
        // the body contains what you have in the state or what you want to send to the server
        // and in order to send it to the backend, we can't just send a javaScript object, you havve to JSON.stringify() the object
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        const {onRouteChange} = this.props;

        return(
            <div className="br3 shwadow-5 w-full max-w-xs center">
            <div className="signIn shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label
                className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username/Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Username/Email"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onEmailChange}/>
                </div>
                <div className="mb-6">
                <label
                className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="******************"
                type="password"
                name="password"
                id="password"
                onChange={this.onPasswordChange}/>
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="center ma2">
                <button className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value='Sign in'
                    onClick={this.onSubmitSignIn}
                >
                    Sign In
                </button>
                </div>
                <div className="ma2">
                <p className="font-bold text-sm hover:green-700 cursor"
                    onClick={() => onRouteChange('register')}>
                    New Account? Sign Up.
                </p>
                </div>
                <p className="text-center text-gray-500 text-xs">
                &copy;2023 Genius Engine. All rights reserved.
                </p>
                </div>
            </div>
        );
        
    }   
}

export default SignIn;