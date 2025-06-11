import React from 'react';

interface ControllerProps {
  onClickButton: (value: number) => void;
}

const Controller = ({ onClickButton }: ControllerProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = Number((e.target as HTMLButtonElement).value);
    onClickButton(value);
  }

  return (
    <div>
      <button value={-1} onClick={handleClick}>-1</button>
      <button value={-10} onClick={handleClick}>-10</button>
      <button value={-100} onClick={handleClick}>-100</button>
      <button value={100} onClick={handleClick}>+100</button>
      <button value={+10} onClick={handleClick}>+10</button>
      <button value={+1} onClick={handleClick}>+1</button>
    </div>
  )
}

export default Controller;