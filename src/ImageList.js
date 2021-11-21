import React from 'react'
import './Main.css'

const ImageList = (props) => {
  // console.log(props.images);
  const images=props.images.map((image)=>{
        return <img src={image.urls.regular} width='25%'/>
    });
    return(
        
       <div className="imgAlign">
        {images}
       </div>
    );
};

export default ImageList;
