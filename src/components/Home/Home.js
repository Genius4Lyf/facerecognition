import React from 'react';
import Tilt from 'react-parallax-tilt';
import brainLogo3 from './brainLogo3.png';
import './Home.css'
import Footer from '../Footer/Footer';
import ParticlesBg from 'particles-bg';
import Spinner from '../Spinner/Spinner';

class HomePage extends React.Component {
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
    }, 4000);
  }
  
  render() {
    const {handleClickWatch} = this.props;
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
            <div className='body'> 
              <main  className="container mx-auto p-4 main-home main-sm">
                <section  className="br3 shwadow-5 w-full max-w-xs main-sm">
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h1 className="text-2xl font-bold mb-4 font-1">SMART</h1>
                  <span><img style={{ height: 50, width: 50 }} src={brainLogo3} alt='logo'/></span>
                  <h1 className="text-2xl font-bold mb-4 font-1">BRAIN</h1>
                  </div>
                  <div className='p-sm p-lg' >
                    <p className="center text-lg color font-2">
                    SmartBrain is a cutting-edge website that utilizes facial 
                    recognition technology to analyze images. By providing the 
                    URL of an image, SmartBrain accurately detects and recognizes 
                    faces, providing valuable insights such as age, gender, emotions, 
                    and facial expressions. With its user-friendly interface and focus 
                    on privacy and security, SmartBrain offers a seamless and secure experience, 
                    making it an invaluable tool for a wide range of applications.
                    </p>
                  </div>
                </section>
                <div className="mt4">
                    <Tilt className='br2 tilt t-height'>
                        <div className="container div-body">
                            <ParticlesBg color="#dcdcdc" type="cobweb" bg={true} />
                            <img className='img-big img-sm img-home img-body' src={brainLogo3} alt='logo' />
                            <div className='sm-btn'>
                            <button onClick={() =>handleClickWatch(true)} className="connect-button font-bold py-2 px-4 rounded focus:outline-none ma2 cursor button-font shadow-2xl btn-grow button-home sm-btn">Connect to Brain</button>
                            </div>
                        </div>
                    </Tilt>
                </div>
              </main> 
              <Footer />
            </div>
          );
      }
  }  
};

export default HomePage;
