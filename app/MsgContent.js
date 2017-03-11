import React from "react";
import MsgItem from './MsgItem.js';
import './css/MsgContent.css';

export default class MsgContent extends React.Component{

  constructor(...args){
    super(...args);
  }



  render(){
    return (
      <div className='MsgContent'>
        {
          (this.props.items).map(item=>{
            console.debug(item);
            return <MsgItem  item={item}/>;
          })
        }
      </div>
    );
  }
}
