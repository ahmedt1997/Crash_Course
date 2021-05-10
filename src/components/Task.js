import reactDom from 'react-dom';
import {FaTimes} from 'react-icons/fa'

// faire un appel au props cree
const Task = ({task,onDelete,ontogglediv}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>ontogglediv(task.id)}> 
            <h3>{task.text} <FaTimes style={{color:'red' , cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    );
}

export default Task;
