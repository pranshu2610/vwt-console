import React from 'react';

const TaskBox = ({type}) => {
  return(
    <div className={`task-box ${type==='task'?'black':''}`}>

    </div>
  )
}
export default TaskBox;