import React from 'react';
import Parallax from './Parallax';
import BackGround from '../images/darkBackGround.jpg';
import BlackGround from '../images/black.jpeg';
import profilePhoto from '../images/profilePhoto.jpeg';

const ParallaxContainer = () => {
  return (
    <div>
      <Parallax imageSrc={BackGround} speed="0.3">
        <div className="parallax__content">
          <h1 className="title__h1">Frontend Developer</h1>
          <h2>Dominik Kubala</h2>
          <p className="half__width">
            The trouble with quotes on the Internet is that you can never know
            if they are genuine.
          </p>
        </div>
      </Parallax>
      <Parallax imageSrc={BlackGround} speed="0.3">
        <div className="parallax__content">
          <div className="grid-container">
            <div className="grid-item1">
              <img
                src={profilePhoto}
                alt={'Profile photo'}
                width="200px"
                style={{ borderRadius: '200px' }}
              />
            </div>
            <div className="grid-item2">
              <h3 className="white">About me</h3>
              <p className="content__text">
                Hello, I'm Dominik Kubala. I'm frontend developer in React{' '}
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
export default ParallaxContainer;
