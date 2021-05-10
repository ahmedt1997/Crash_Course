import Header from './components/Header'
import {useState} from 'react'
import Task from './components/Tasks'
function App() {
  const [tasks,setTasks] = useState([
        {
         id:1,
         text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
         day:'Feb 5th at 3:44pm',
          reminder:true
    
        },         
        {
         id:2,
         text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
         day:'Feb 5th at 3:44pm',
          reminder:true
    
        } ,          
        {
         id:3,
         text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
         day:'Feb 5th at 3:44pm',
          reminder:true
    
        }           
       ])

 
  return (
    <div className="container">
      <Header/>
      <Task tasks={tasks} />
    </div>
  );
}

export default App;
