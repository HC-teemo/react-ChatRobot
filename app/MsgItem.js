import React from "react";
import './css/MsgItem.css';

export default class MsgItem extends React.Component{
  constructor(...args){
    super(...args);
  }

  render(){
    return (
      <div className='MsgItem'>
        <div className={this.props.item.side+' MsgItem-con'}>
          {this.props.item.text?this.props.item.text:<a href={this.props.item.url}>点此跳转</a>}</div>
      </div>
    );
  }
}
