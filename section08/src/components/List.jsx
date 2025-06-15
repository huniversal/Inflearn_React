import React from 'react'
import TodoItem from "./TodoItem";
import "./List.css"

const List = () => {
  return (
    <div className='List'>
      <h4>Todo List ☁️</h4>
      <input placeholder='검색어를 입력하세요' type="text" />
      <div className='todos_wrapper'>
        <TodoItem />
        <TodoItem />
        <TodoItem /> 
      </div>
    </div>
  )
}

export default List
