import React from 'react'
import counterStore from '../stores/counterStore';

const CountBox = () => {
  const {count} = counterStore();
  return (
    <div>
      countBox : {count}
    </div>
  )
}

export default CountBox;
