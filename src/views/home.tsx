import { withRouter} from "react-router"
import React, { useState, useEffect, useContext } from 'react';
import editor from 'wangeditor'
import {Store} from '../hook/store-content'
let dom:any = null
function Home(){
  const store:Store = useContext(Store);
  const [htmlContent, setHtmlContent] = useState('')
  useEffect(() => {
    console.log(store.state);
    
    dom = new editor('#editor')
    dom.config.onchange = (newHtml) => {
      setHtmlContent(newHtml)
    }
    // 创建
    dom.create()
    return () => {
      // 销毁
      dom.destroy()
    }
  }, [htmlContent]);
  return <div className="chat-room_page">
            <div className="chat-room_left">
                <div className="chat-content">
                  {htmlContent}
                </div>
                <div id="editor" className="chat-editor"></div>
            </div>
            <div className="chat-room_right"></div>
         </div>
}
export default withRouter(Home as any)