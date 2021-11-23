import React from 'react'
import './Main.css'

const ImageList = (props) => {
  // console.log(props.images);
  const images=props.images.map((image,id)=>{
        return <img src={image.urls.regular} key={image.id}/>
    });
    return(
        
       <div className="imgAlign">
        {images}
       </div>
    );
};

export default ImageList;
