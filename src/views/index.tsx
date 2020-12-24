import React from 'react';
import './index.less'
export default class Index extends React.Component<any, any>{
  constructor(props: object){
    super(props)
    this.state = {
      num: 1
    }
  }

  render(){
    return <div className="index">{this.state.num}</div>
  }
}