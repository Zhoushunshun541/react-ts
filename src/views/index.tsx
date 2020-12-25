import React from 'react';
import './index.less'
import { Button } from 'antd';
export default class Index extends React.Component<any, any>{
  constructor(props: object){
    super(props)
    this.state = {
      num: 1
    }
  }
  render(){
    const addNum = ()=> {
      this.setState({
        num:  1000
      })
    }
    return <div className="index" onClick={addNum} >
      {this.state.num}
      <Button type="primary" shape="circle" >查看按钮</Button>
    </div>
  }
}