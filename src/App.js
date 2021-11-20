import React from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';

class App extends React.Component {
 async onSubmitSer(term)
  {
    console.log(term);
   const res= await axios.get('https://api.unsplash.com/search/photos?',{ 
      params :{ query : term},
      headers :{ Authorization : 'Client-ID dBo2w6Xlc87IbmiOPTKCCoj3mZbUBq4gFTR0WaHT8Bk'}
    });
    /*
    .then statment can be used when we are working with promises returned through axios
    .then((Response)=>{
       console.log(Response);
    });
    */
   console.log(res.data.results );
  }
  render()
  { return (
    <div>
      <Searchbar onSubmit={this.onSubmitSer}></Searchbar>
    </div>
  )
  }
}

export default App
