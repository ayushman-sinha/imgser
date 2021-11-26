import React from "react";
class ImgCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.imgRef=React.createRef();
        this.state={spans : 0};
    }
    componentDidMount()
    {
        this.imgRef.current.addEventListener('load',this.setSpans);//Event listener to render accordingly after each search
        console.log(this.imgRef.current.clientHeight);
        
    }
    setSpans=()=>{
        const height=this.imgRef.current.clientHeight;
        const spans=Math.ceil(height/10);
        this.setState({spans});
    }
 render()
 {
    
     return (<div style={{gridRowEnd : `span ${this.state.spans}`}}>
         <img ref={this.imgRef} alt={this.props.image.description} src={this.props.image.urls.regular} />
         
              </div> )
 }
}
export default ImgCard;