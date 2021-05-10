import React from 'react';
import {useState} from 'react'



const Task = () => {
    const [tasks,setTasks] = useState([
        
     {
      id:1,
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      day:'Feb 5th at 3:44pm',
       reminder:true

     } 
                    
                
    ])
    
    
    return (
        <div>
            {tasks.map((tas)=>(
                <div key={tas.id}>
                 <h1>{tas.id}</h1>
                <p>{tas.text}</p>
                <p>{tas.day}</p>
                </div>
                
            ))}   
        </div>
    );
}

export default Task;
