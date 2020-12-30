
import { withRouter } from "react-router"
import './index.less'
import { Form, Input, Button,message } from 'antd';
import { sysLogin } from '../api/api'

function Index(props){
  const FormOptions = {
    validateTrigger:'onBlur'
  }
  const user = {
    username:'',
    password:''
  }
  const toLogin = () => {
    console.log(user);
    let p = {
      ...user
    }
    sysLogin(p).then((res: Api) => {
      if (res.status) {
        props.history.push('/home')
      }else{
        message.error(res.msg)
      }
    })
  }
  const changeData = (e,key) => {
    user[key] = e.target.value
  }
  return <div className="index"  >
  <Form {...FormOptions}>
    <Form.Item
      label="用户名"
      name="username"
      rules={[{ required: true, message: '请输入用户名' }]}
    >
      <Input placeholder="请输入用户名" onChange={e => changeData(e,'username')} />
    </Form.Item>
    <Form.Item
      label="密码"
      rules={[{ required: true, message: '请输入密码'}]}
    >
      <Input placeholder="请输入用户名" onChange={e => changeData(e,'password')}/>
    </Form.Item>
    <Button onClick={toLogin}>登录</Button>
  </Form>
</div>
}
export default withRouter(Index as any)