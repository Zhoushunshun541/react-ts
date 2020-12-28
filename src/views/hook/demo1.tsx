import { useCallback, useState } from 'react';
import Button from '../../components/button'
function Demo1() {
  const [num, setnum] = useState(0)
  console.log('demo1刷新了');
  const addNum2 = useCallback(()=> {
    setnum(pr => pr+1)
  },[])
  return <div>测试一下
    <p>num是：{num}</p>
    {/* {
      useMemo(() => <Button onClick={addNum2} children="按钮1"></Button>, [])
    } */}
    <Button onClick={addNum2} >按钮2212</Button>
  </div>
}
export default Demo1