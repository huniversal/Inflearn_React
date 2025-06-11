import { useState, useEffect } from 'react';
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function AppIn() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count: ${count} / ${input}`)
  }, [count, input])

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