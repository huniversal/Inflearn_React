import React from 'react'
import { useState } from "react";
import CountBox from './components/countBox';
import counterStore from './stores/counterStore';

function App() {
  const {count, increase, increaseBy} = counterStore();
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={() => increaseBy(10)}>10씩 증가</button>
      <CountBox />
    </div>
  )
}

export default App
