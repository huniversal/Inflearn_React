import { useState, useEffect, useRef } from 'react';
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function AppIn() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log("Mount")
  },[])
  
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("Update");
  })
  // 3. 언마운트 : 죽음

  const onClickButton = (value: number) => {
    setCount((prev) => prev + value);
  }

  return (
    <div>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input value={input} onChange={(e)=>{
            setInput(e.target.value);
          }}/>
        </section>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller onClickButton={onClickButton} />
        </section>
      </div>
    </div>
  )
}

export default AppIn;