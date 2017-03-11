import React from "react";
import $ from "jquery";
import './css/MsgInput.css';

export default class MsgInput extends React.Component{

  handleClick(){
    let text=$(".MsgInput-Input").val();
    //console.log(text);
    let data={
      code:100000,
      text:text,
      side:"right"
    }
    this.props.handle(data);
  }

  render(){
    return (
      <div className='MsgInput'>
        <input type="text" className="MsgInput-Input"/>
      <input type="button" className="MsgInput-Btn" value="Send" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}
