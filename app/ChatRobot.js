import React from "react";
import $ from "jquery";
import MsgContent from './MsgContent.js';
import MsgInput from './MsgInput.js';
import './css/ChatRobot.css';

export default class ChatRobot extends React.Component{

  constructor(...args){
      super(...args);
      let items=new Array();
      this.state={
        items:items
      }
    //this.AddItem({code:100000,text:"123"});
  }

  AddItem(item={code:null,text:null,from:null}){
    let items=this.state.items;
    items.push(item);
    this.setState({
      items:items
    });
    //console.debug(this.state.items);
  }


  handleSend(item){
    this.AddItem(item);
    var that=this;
    $.ajax({
      url: 'http://www.tuling123.com/openapi/api',
      type: 'POST',
      data: {
        key: '32436954020b454ea59e81fca6590ed0',
        info: item.text,
        userid: 123456
      }
    })
    .done(function(res) {
      console.log("success");
      console.log(res);
      that.AddItem({
        code:res.code,
        text:res.text,
        side:'left'
      });
      if(res.code=200000){
        that.AddItem({
          code:res.code,
          url:res.url,
          side:'left'
        });
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }

  render(){

    return (
      <div className="ChatRobot">
        <MsgContent items={this.state.items}></MsgContent>
      <MsgInput handle={this.handleSend.bind(this)}></MsgInput>
      </div>
    );
  }
}
