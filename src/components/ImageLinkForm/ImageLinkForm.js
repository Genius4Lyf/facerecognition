import React from 'react';
import './ImageLinkForm.css';
import ParticlesBg from 'particles-bg';


class ImageLinkForm extends React.Component {

    render() {
        const {onInputChange, onPictureSubmit} = this.props
        
        return (
            <>
            <div className='bg-body btn'>
                <ParticlesBg color="#292929" type="cobweb" bg={true} />
                <p className="f3 text txt-font">
                    {"This Magic Brain will detect faces in your pictures. Give it a try"}
                </p>
                <div className="center">
                    <div className="form form-sm center pa3 br3 shadow-5">
                        <input className="f4 pa2 w-60 right input-text" type="text" onChange={onInputChange}/>
                        <button className="w-30 f4 link pv2 dib black txt-font" onClick={onPictureSubmit} >Detect</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ImageLinkForm;