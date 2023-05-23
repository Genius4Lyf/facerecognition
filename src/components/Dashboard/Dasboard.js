import React from "react";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../FaceRecognition/FaceRecognition";
import Rank from "../Rank/Rank";
import Navigation from "../Navigation/Navigation";
import Spinner from "../Spinner/Spinner";

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        // Simulating an asynchronous operation
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000);
    }

    render(){
        const {name, entries, onInputChange, onPictureSubmit, box, imageURL,
            isSignedIn, onRouteChange, handleClickWatch, watch} = this.props
        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className='app-container'>
                  <div className='spinner-container'>
                    <Spinner />
                  </div>
                </div>
              );
          } else {

            return (
                <>
                    <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} handleClickWatch={handleClickWatch} watch={watch} />
                    <Rank name={name} entries={entries} />
                    <ImageLinkForm onInputChange={onInputChange} onPictureSubmit={onPictureSubmit} />
                    <FaceRecognition box={box} imageURL={imageURL} />
                </>
            )
        } 
    }
}

export default Dashboard;