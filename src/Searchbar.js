import React from "react";
import './Main.css'
class Searchbar extends React.Component
{
    state={ term: ''};
    onSub=(e)=>
    {
       e.preventDefault();
       console.log(this.state.term);
    };
    
    onInput(e)
    {
        //console.log(e.target.value);
    }
    wasClicked()
    {
        console.log('Input was Clicked');
    }
    render()
    {
        
        return (
          <div className="main_container">
              <label className="ui label label_edit">SearchMe</label>        
            <form className="ui form search_container" onSubmit={this.onSub}>
                <input type="text" onChange={this.onInput} onClick={this.wasClicked}></input>
            </form>
      
       </div>
      
        );
    }
}
export default Searchbar;