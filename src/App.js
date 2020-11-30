import "./App.css";
import React, { useReducer } from "react";
// import MultipleReducer from "./components/MultipleReducer";
// import ContextApi from "./components/ContextApi";
// import FatchingDataUseState from "./components/FatchingDataUseState";
import FatchingDataUseReducer from "./components/FatchingDataUseReducer";
// import ComponentA from "./components/ComponentA";
// import Usereducer from "./components/Usereducer";
// import DataFetching from './components/DataFetching';
// import UseeffectInterval from './components/UseeeffectInterval';
// import Useeffect from './components/Useeffect';
// import UseeffectCleanup from './components/UseeffectCleanup';
// import Usestate from './components/Usestate';

// export const userContext = React.createContext();
// export const channelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = {
  data: 0,
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'incre':
      return {data: state.data + 1}
    case 'decre':
      return {data: state.data - 1}
    case 'reset': 
    return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        {/* <Usestate/> */}
        {/* <Useeffect/> */}
        {/* <UseeffectCleanup/> */}
        {/* <UseeffectInterval/> */}
        {/* <DataFetching/> */}
        {/* <userContext.Provider value="harshit">
      <channelContext.Provider value="gupta">
        <ComponentA />
      </channelContext.Provider>
      </userContext.Provider> */}
        {/* <Usereducer/> */}
        {/* <MultipleReducer/> */}
        {/* <ContextApi /> */}
        {/* <FatchingDataUseState/> */}
        <FatchingDataUseReducer/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
