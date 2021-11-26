import React from 'react'
import './Main.css'
import ImgCard from './ImgCard';
const ImageList = (props) => {
 //console.log(props.images);

 
  const images=props.images.map((image,id)=>{
    
        return <ImgCard ref={image.ref} alt={image.alt} src={image.id} image={image}></ImgCard>
    });
    return(
        
       <div className="imgAlign">
        {images}
       </div>
    );
};

export default ImageList;
