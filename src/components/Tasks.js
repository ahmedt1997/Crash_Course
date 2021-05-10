import Task from './Task'

const Tasks = ({tasks}) => {
 // const tasks = props.tasks
  //console.log(tasks)
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id}  task={task}/>
      ))}
    </>
    
    
  )
}

export default Tasks