import {useEffect} from "react";

const Timer = () => {
  useEffect(()=>{
    const interval = setInterval(()=>{
      console.log("count 실행")
    }, 1000)

    return () => {
      console.log("타이머 정리됨");
      clearInterval(interval) // interval를 닫아주는 역할
    }
  }, [])

  return (
    <div>Timer</div>
  )
}

export default Timer;