

const Task = ({task}) => {
    return (
        <div className='task'> 
            <h1>{task.text}</h1>
            <p>{task.day}</p>
        </div>
    );
}

export default Task;
