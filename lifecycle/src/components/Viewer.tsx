interface Counter {
  count: number
}

// 구조분해할당으로 count값 받아오기
const Viewer = ({count}:Counter) => { 
  return (
    <div>
      <div>현재 카운트 : </div>
      <h1>{ count }</h1>
    </div>
  )
}

export default Viewer
