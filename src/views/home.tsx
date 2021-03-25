import { withRouter} from "react-router"
import './home.less'
import React, { useState, useEffect, useContext } from 'react';
import {Store} from '../hook/store-content'
import editor from 'wangeditor'
import io from 'socket.io-client';
let dom:any = null
function Home(){
  const store:Store = useContext(Store);
  const [htmlContent, setHtmlContent] = useState({__html:''})
  useEffect(() => {
    console.log("localStore:",localStorage.aa);
    
    initEditor('#editor')
    initWs()
    return () => {
      // 销毁
      dom.destroy()
    }
  }, []);
  // 初始化编辑器
  const initEditor = (id) => {
    dom = new editor(id)
    dom.config.onchange = (newHtml) => {
      store.dispatch({type:'login',payload:{
        username:newHtml
      }})
      setHtmlContent({__html:newHtml})
    }
    // 创建
    dom.create()
  }

  const initWs = () => {
    // 连接服务器, 得到与服务器的连接对象
    const socket = io.io('ws://localhost:8060')
    // 绑定监听, 接收服务器发送的消息
    socket.on('receiveMsg', (data) => {
      console.log('客户端接收服务器发送的消息', data)
    })
    // 发送消息
    socket.emit('sendMsg', {name: 'abc'})
    console.log('客户端向服务器发消息', {name: 'abc'})
  }
  return <div className="chat-room_page">
            <div className="chat-room_left">
                <div className="chat-content" dangerouslySetInnerHTML={htmlContent}>
                </div>
                <div id="editor" className="chat-editor"></div>
            </div>
            <div className="chat-room_right flex">
              <div className="flex person-info flex">
                <div className="left">
                  <img src={process.env.REACT_APP_DOWNLOAD+store.state.pic} width="180" height="270" alt=""/>
                </div>
                <div className="right">
                  <p>姓名：{store.state.name}</p>
                  <p>手机号：{store.state.mobile}</p>
                  <p>工作：{store.state.job}</p>
                </div>
              </div>
              <div className="mt10">
                <p>所在公司：{store.state.company_name}</p>
              </div>
            </div>
         </div>
}
export default withRouter(Home as any)