import React from 'react';
import task from '../../assets/icons/task.png';
import trash from '../../assets/icons/trash.png';

const TaskBox = ({type}) => {
  const isTypeTask = (type) => {
    if (type==='task') {
      return true;
    }
    else {
      return false
    }
  }
  const srcProvider = (type) => {
    if (isTypeTask(type)) {
      return task;
    }
    else {
      return trash;
    }
  }
  return(
    <div className={`task-box ${isTypeTask(type)?'black':''}`}>
      <div style={{alignSelf:'flex-end',marginBottom:'-20px'}} className={`icon-shadow purple large`}>
        <img className="icon-img enlarge" src={srcProvider(type)} alt={type}/>
      </div>
      <p style={{alignSelf:'flex-start'}} className="text-large">
        {isTypeTask(type)?'Task':'35L'}
      </p>
      {
        isTypeTask(type) ?
        null:
        <p className="text-medium">
          Waste Deposited
        </p>
      }
    </div>
  )
}
export default TaskBox;