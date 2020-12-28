import { useState } from 'react';
import Button2 from '../../components/button2'

function Demo2() {
  const [name, setname] = useState('zss')
  const [age, setage] = useState(19)
  const changeName = () => {
    if (name === '周顺顺') {
      setname('zss')
    }else{
      setname('周顺顺')
    }
    
  }
  return <div>
    <Button2 name={name}>{age}</Button2>
    <button onClick={() => setage(age+1)}>changeAge</button>
    <button onClick={changeName}>changeName</button>
  </div>  
}
export default Demo2;