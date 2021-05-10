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
        ,         
        {
         id:4,
         text:'Lorem, ipsum dolor ',
         day:'Feb 7th at 9:44pm',
          reminder:false
    
        }           
       ])
        // 1 definir la fonction 

       const deleteTask = (id) => {
        // console.log(id)
        setTasks(tasks.filter((task) => task.id !== id))
      }

      const ontoggle = (id) => {
        setTasks(tasks.map((task) => 
        task.id === id ? {...task,reminder:!task.reminder} : task))
      }
    

 
  return (
    <div className="container">
      <Header/>
      {/* 2 mettre le fonction en propos */}
      {tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} ontogglediv={ontoggle} /> : 'Nothing to show'}
      
    </div>
  );
}

export default App;
