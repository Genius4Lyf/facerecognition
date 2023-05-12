import './ImageLinkForm.css'

function ImageLinkForm ({ onInputChange, onPictureSubmit }) {
    return (
        <div>
            <p className="f3">
                {"This Magic Brain will detect faces in your pictures. Give it a try"}
            </p>
            <div className="center">
                <div className="form center pa3 br3 shadow-5">
                    <input className="f4 pa2 w-60 right" type="text" onChange={onInputChange}/>
                    <button className="w-30 grow f4 link pv2 dib black bg-dark-green" onClick={onPictureSubmit} >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;