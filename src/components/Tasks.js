import Task from './Task'

// faire un appel au props cree

const Tasks = ({tasks , onDelete}) => {
 // const tasks = props.tasks
  //console.log(tasks)
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id}  task={task} onDelete={onDelete} />
      ))}
    </>
    
    
  )
}

export default Tasks