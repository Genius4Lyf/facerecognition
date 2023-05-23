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
            <footer className="pv4 ph3 ph5-ns tc footer">
                        <div className="mt4">
                            <a href="https://twitter.com/DannyKings11" className="f6 link dim gray dib mr3 mr4-ns">Help</a>
                            <a href="https://twitter.com/DannyKings11" className="f6 link dim gray dib mr3 mr4-ns">Send feedback</a>
                            <a href="https://twitter.com/DannyKings11" className="f6 link dim gray dib mr3 mr4-ns">Privacy</a>
                            <a href="https://twitter.com/DannyKings11" className="f6 link dim gray dib">Terms</a>
                        </div>
                        <p className="text-center text-gray-500 text-xs">
                                    &copy;2023 Genius Engine. All rights reserved.
                        </p>
                    </footer>
            </>
        )
    }
}

export default ImageLinkForm;