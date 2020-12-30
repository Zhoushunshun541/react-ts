import { useEffect, useState } from 'react';
import Button2 from '../../components/button2'

function Demo2(props) {
  const [name, setName] = useState('zss')
  const [age, setAge] = useState(19)
  const changeName = () => {
    if (name === '周顺顺') {
      setName('zss')
    }else{
      setName('周顺顺')
    }
  }
  const toDemo = () => {
    props.history.push('/home')
  }
  useEffect(() => {
    console.log('dom更新了')
    return () => {
      console.log('dom清理了')
    };
  }, []);
  return <div>

    <Button2 name={name}>{age}</Button2>
    <button onClick={() => setAge(age+1)}>changeAge</button>
    <button onClick={changeName}>changeName</button>
    <button onClick                                                                                                                                                                                                                                                                                                                                                                                                                                                            ={toDemo} >demo1</button>
  </div>  
}
export default Demo2;