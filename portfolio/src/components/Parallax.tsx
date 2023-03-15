import React from 'react';
import './Parallax.css';

const Parallax = ({ children, imageSrc, speed }:{children?: any, imageSrc?:string, speed?:string}) => {
  return (
    //@ts-ignore
    <div className="parallax" style={{ backgroundImage: `url(${imageSrc})`, '--speed': speed }}>
      {children}
    </div>
  );
};

export default Parallax
