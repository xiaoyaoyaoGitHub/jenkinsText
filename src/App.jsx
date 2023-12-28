import { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { addNumber, subNumber } from "./store/modules/counter";

import './App.css';

const HelloWord = memo(() => {
  console.log('HelloWrod render');
  // * 1. useSelector默认监听的是整个state,所以state中任何值变化都会引发渲染
  // const {msg} = useSelector((state) => ({
  //   msg: state.counter.msg
  // }))
  // * 2. useSelector传入第二个参数(用于比较依赖的值是否有变化),然后可以决定是否需要重新渲染,shallowEqual为react-redux内部提供
  const {msg} = useSelector((state) => ({
    msg: state.counter.msg
  }),shallowEqual)

  return <div>
    {msg}
  </div>
})

function App() {
  // 使用useSelector将redux中的store数据映射到组件内
  const {count} = useSelector((state) => ({
    count:state.counter.count
  }),shallowEqual)
  // 使用dispatch直接派发action
  const dispatch = useDispatch();
  console.log('App render');

  return (
    <div className="App">
        <h4>App</h4>
        <h5>count:{count}</h5>
        <button onClick={() => dispatch(addNumber(1))}>+</button>
        <button onClick={() => dispatch(subNumber(1))}>-</button> 
        <HelloWord/>
    </div>
  );
}


export default App; 
