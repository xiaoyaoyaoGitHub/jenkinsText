import { connect } from "react-redux"
import { addNumber, subNumber } from "./store/modules/counter";

import './App.css';

function App(props) {
  return (
    <div className="App">
        <h4>App</h4>
        <h5>count:{props.count}</h5>
        <button onClick={() => props.addNum(1)}>+</button>
        <button onClick={() => props.subNum(1)}>-</button> 
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch) => ({
  addNum(num){
    dispatch(addNumber(num))
  },
  subNum(num){
    dispatch(subNumber(num))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(App); 
