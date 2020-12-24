import { Component } from 'react';
import {style} from './index.module.less'
export default class Index extends Component{
  constructor(props: object){
    super(props)
    this.state = {
      num:1
    }
  }

  render(){
    return <div className={style.index}>index</div>
  }
}