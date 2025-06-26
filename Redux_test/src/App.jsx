import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box.jsx"

function App() {
  const count = useSelector(state => state.count)
  const id = useSelector(state => state.id)
  const password = useSelector(state => state.password)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: "INCREMENT", payload: {num: 5}})
  }

  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "hunjin", password: "123"}})
  }
  return (
    <div>
      <h1>{count}</h1>
      <h1>{id}</h1>
      <h1>{password}</h1>
      <button onClick={increase}>중가</button>
      <button onClick={login}>로그인</button>
      <Box />

    </div>
  )
}

export default App
