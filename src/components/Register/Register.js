import React from 'react';
import '../Sign-In/SignIn.css'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignUp = () => {
        // When trying to Sign in, We do a post request and because
        // and because fetch by default does a guest request, we pass and object {}
        // in the second parameter that describes what the request will be
        fetch('http://localhost:3001/register', {
            method: "post",
            headers: {"Content-Type": "application/json"},
        // the body contains what you have in the state or what you want to send to the server
        // and in order to send it to the backend, we can't just send a javaScript object, you havve to JSON.stringify() the object
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })
    }

    render() {
        return (
            <div className="br3 shwadow-5 w-full max-w-xs center">
                <div className="signIn shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="LastName FirstName"
                        type="name"
                        name="name"
                        id="name"
                        onChange={this.onNameChange}/>
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Username/Email"
                        type="email"
                        name="email-address"
                        id="email-address"
                        onChange={this.onEmailChange}/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                        value='Register'
                        onClick={this.onSubmitSignUp}
                    >
                        Done
                    </button>
                    </div>
                    <p className="text-center text-gray-500 text-xs">
                    &copy;2023 Genius Engine. All rights reserved.
                    </p>
                </div>
            </div>
        );
    }
}

export default Register;