

const Tasks = ({tasks}) => {
 // const tasks = props.tasks
  //console.log(tasks)
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
    
    
  )
}

export default Tasks