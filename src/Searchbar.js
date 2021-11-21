import React from "react";
import './Main.css'
class Searchbar extends React.Component
{
    
   state={ term:'',style :" "};
   
    onSub=(e)=>
    {
       e.preventDefault();    
       this.props.onSubmit1(this.state.term); 
      
      // console.log(this.state.term);
    };
    
    onInput=(e)=>
    {
        this.setState({term : e.target.value});
       // this.setState({term : e.targe.value});
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
                <input type="text"  onChange={e=>this.onInput(e)}  onClick={this.wasClicked}></input>
            </form>
      
       </div>
      
        );
    }
}
export default Searchbar;