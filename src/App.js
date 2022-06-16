import './App.css';
import React from 'react';
import { TaskCounter } from './Components/TaskCounter/TaskCounter';
import { TaskSearch } from './Components/TaskSearch/TaskSearch';
import { TaskList } from './Components/TaskList/TaskList';
import {TaskItem} from './Components/TaskItem/TaskItem';
import {TaskButton} from './Components/TaskButton/TaskButton';
import {TaskTitle} from './Components/TaskTitle/TaskTitle';
const task = [
  { text: 'cortar cebolla', completed: false },
  { text: 'cortar cebolla', completed: false },
  { text: 'cortar cebolla', completed: false },
];
function App() {
  return (
    <React.Fragment>
      <TaskTitle/>
     <TaskCounter /> 
      <TaskSearch />
      <TaskList>
        {task.map(task =>(
        <TaskItem key={task.text} text={task.text}/>
        ))}
      </TaskList>
      <TaskButton/>
    </React.Fragment>
  );
}

export default App;
