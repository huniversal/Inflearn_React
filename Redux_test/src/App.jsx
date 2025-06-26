import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box.jsx"

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: "INCREMENT", payload: {num: 5}})
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>중가</button>
      <Box />

    </div>
  )
}

export default App
