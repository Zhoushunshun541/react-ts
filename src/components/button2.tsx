import { useMemo } from "react";

function Button2(props){
  function otherName(name){
    console.log('调用了otherName');
    return name
  }
  const name1 = useMemo(() => otherName(props.name), [props.name])
  return <div>
    <div>{name1}</div>
    <div>{props.children}</div>
  </div>
}
export default Button2
