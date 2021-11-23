import React from 'react';
import unsplash from './unsplash';
import Searchbar from './Searchbar';
import ImageList from './ImageList';

class App extends React.Component {
  state={images:[]};
 onSubmitSer=async term=>
  {
    console.log(term);
   const res= await unsplash.get('https://api.unsplash.com/search/photos?',{ 
      params :{ query : term ,per_page : 20},
   
    });
    /*
    .then statment can be used when we are working with promises returned through axios
    .then((Response)=>{
       console.log(Response);
    });
    */
   this.setState({images : res.data.results});
  };
  render()
  { return (
    <div className="containerBig">
      <Searchbar onSubmit1={this.onSubmitSer}></Searchbar>
      <ImageList images={this.state.images}/>
      Found : {this.state.images.length} images
      
    </div>
  )
  }
}

export default App
