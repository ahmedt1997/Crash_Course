import Button from './Button'
import Task from './Tasks'

const Header = ({title}) => {
    const onclick = () => {
        console.log('cliked')
    }
   
    return (
        <header className='header'>
           <h1>{title}</h1> 
           <Button color='green' text='add' onClick={onclick} />
           <Task />
        </header>
    );
}

Header.defaultProps = {
    title:'Task Tracker'
}

export default Header;
