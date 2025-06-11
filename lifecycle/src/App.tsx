import { useEffect, useState } from "react";
import Timer from "./components/Timer"

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const [showTimer, setshowTimer] = useState(true);
  
  const handleClick= () => {
    setCount((prev) => prev + 1);
    setValue((prev) => prev + 1);
  }
  useEffect(()=>{
    console.log("시작!!") 
    // 앱 초기 작업, API 호출
  }, []);

  useEffect(()=>{
    console.log("업데이트");
  }, [count]);

  useEffect(()=>{
    console.log("다른 일")
  }, [value])

  console.log("렌더링")
  return (
    <div className ="App">
      <h1>{ count }</h1>
      <h2>value: { value }</h2>
      <button onClick={ handleClick }>증가</button>
      <button onClick={ () => setshowTimer((prev) => !prev) }>
        show/hide
      </button>
      {showTimer && <Timer />}
    </div>
  )

}

export default App


