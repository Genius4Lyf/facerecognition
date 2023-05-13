// CSS FILES ON THIS PROJECT
import './App.css';
// REACT FILES ON THIS PROJECT.......
import React, {Component} from 'react';
// COMPONENTS FILES ON THIS PROJECT.....
import Register from './components/Register/Register';
import SignIn from './components/Sign-In/SignIn';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
// NPM PACKAGES ON THIS PROJECT......
import ParticlesBg from 'particles-bg';

const initialState = {
    input: '',
    imageURL: '',
    box: {},
    route: 'signIn',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email:'',
        entries: 0,
        joined: ''
    }
}


class App extends Component {
    constructor() {
        super();
        this.state = initialState
        }

    loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email:data.email,
            entries: data.entries,
            joined: data.joined
        }})
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value})
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        console.log('width and height', width, height )
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        this.setState({box: box});
        console.log(box)
    }

    onPictureSubmit = () => {
        this.setState({imageURL: this.state.input})

        // fetch("https://api.clarifai.com/v2/models/face-detection/outputs", returnClarifaiRequestOption(this.state.input))
        //     .then(response => response.json())
            fetch('http://localhost:3001/imageurl', {
                method: "post",
                headers: {"Content-Type": "application/json"},
            // the body contains what you have in the state or what you want to send to the server
            // and in order to send it to the backend, we can't just send a javaScript object,
            // you have to JSON.stringify() the object
                body: JSON.stringify({ 
                    input: this.state.input
                })
            })
            .then(response => response.json())
            .then(response => {
                if (response) {
                // This line of code wants to update the amount of entries a user has made
                // by using the put method to update the user id and in so doing sends an object using JSON.stringify.
                // and when the server receives this JSON object. Another line of runs by checking if the id sent through JSON
                // matches the users id that was iterated using the forEach method
                    fetch('http://localhost:3001/image', {
                        method: "put",
                        headers: {"Content-Type": "application/json"},
                    // the body contains what you have in the state or what you want to send to the server
                    // and in order to send it to the backend, we can't just send a javaScript object,
                    // you have to JSON.stringify() the object
                        body: JSON.stringify({ 
                            id: this.state.user.id
                        })
                    })
                    // after the line of code has been ran on the server, a response is sent back
                    // the response that we receive will be sent as a json and in order to read this
                    // json file, we have to run a method on the response --> response.json()
                        .then(response => response.json())
                    // the response sent by the server was a number and the number gets updated to the state
                    // variable 'users' having 'entries' as a key
                        .then(count => {
                            this.setState(Object.assign(this.state.user, {entries: count}))
                        }).catch(console.log)
                }
                // this code runs by calling on CalculateFaceLocation and then runs the CalculateFaceLocation function in order to return
                // the objects set for it to return and displayFaceBox gets the output of CalculateFaceLocation as it's argument and then
                // sets the objects it receive the the box state that was declared. Much Better??
               this.displayFaceBox(this.calculateFaceLocation(response))
            })
            .catch(err => console.log(err));
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState)
        } else if (route === 'home') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: route})
    }

    render() {
        return(
            <div className='App'>
                <ParticlesBg color="#f7fff9" type="cobweb" bg={true} />
                <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
                {/* signing into the app requires a conditional statement */}
                { this.state.route === 'home' ? 
                    <div>
                        <Logo />
                        <Rank name={this.state.user.name} entries={this.state.user.entries} />
                        <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}/>
                        <FaceRecognition box={this.state.box} imageURL={this.state.imageURL} />
                    </div>
                : (
                    this.state.route === 'signIn'
                    ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                    : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                )
            }
            </div>
        )
    }
};

export default App;