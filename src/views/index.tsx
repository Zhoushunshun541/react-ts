import React, { Component } from 'react';
import { withRouter } from "react-router"
import './index.less'
import { Button } from 'antd';
class Index extends Component<any, any>{
  constructor(props: object){
    super(props)
    this.state = {
      num: 1
    }
    
  }
  addNum = ()=> {
    this.props.history.push('/home')
    this.setState({
      num:  1000
    })
  }
  render(){
    
    return <div className="index"  >
      {this.state.num}
      <Button type="primary" onClick={this.addNum} shape="circle" >查看按钮</Button>
    </div>
  }
}
export default withRouter(Index as any)