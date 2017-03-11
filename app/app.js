import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import ChatRobot from './ChatRobot.js';
import './css/reset.css';

render(<ChatRobot />, $('#content')[0]);
// import $ from 'jquery';
// let content=$("#content");
// let inputBox=$("#inputText");
// let sendBtn=$("#sendBtn");
//
// sendBtn.click(()=>{
//   console.log(inputBox.val());
//   content.append(`<p>我：${inputBox.val()}</p>`);
//   $.ajax({
//     url: 'http://www.tuling123.com/openapi/api',
//     type: 'POST',
//     data: {
//       key: '32436954020b454ea59e81fca6590ed0',
//       info: inputBox.val(),
//       userid: 123456
//     }
//   })
//   .done(function(res) {
//     console.log("success");
//     console.log(res.text);
//     content.append(`<p>他：${res.text}</p>`);
//   })
//   .fail(function() {
//     console.log("error");
//   })
//   .always(function() {
//     console.log("complete");
//   });
//
// });
