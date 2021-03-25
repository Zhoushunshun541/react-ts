
import { withRouter } from "react-router"
import './login.less'
import { Form, Input, Button,message} from 'antd';
import { CaretRightOutlined,UserOutlined} from '@ant-design/icons';
import { sysLogin } from '../api/api'
import { useContext } from "react";
import {Store} from '../hook/store-content'
function Login(props){
  const store:Store = useContext(Store);
  const FormOptions = {
    validateTrigger:'onBlur',
  }
  // const [form] = Form.useForm();
  const user = {
    username:'',
    password:''
  }
  const toLogin = (e) => {
    e.preventDefault()
    let p = {
      ...user
    }
    sysLogin(p).then((res: Api) => {
      if (res.status) {
        store.dispatch({type:'login',payload:{
          ...res.data
        }})
        localStorage.setItem('aa',"14")
        props.history.push('/home')
      }else{
        message.error(res.msg)
      }
    })
  }
  const changeData = (e,key) => {
    user[key] = e.target.value
  }
  // 表单校验的回调方法
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return <div className="zss-login flex" >
          <div className="zss-login-bg">
            <Form {...FormOptions}  onFinishFailed={onFinishFailed}>
              <Form.Item
                label=""
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
              
              >
                <Input suffix={<UserOutlined className="site-form-item-icon" />}  type="text" placeholder="账户" onChange={e => changeData(e,'username')} />
              </Form.Item>
              <div className="zss-login-divider"></div>
              <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: '请输入密码'}]}
              >
                <Input.Password type="password" placeholder="密码" onChange={e => changeData(e,'password')}/>
              </Form.Item>
            </Form>
            <Button onClick={toLogin} icon={<CaretRightOutlined />}></Button>
          </div>
        </div>
}
export default withRouter(Login as any)