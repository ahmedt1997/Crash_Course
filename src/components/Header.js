import Button from './Button'

const Header = ({title}) => {
    const onclick= () => {
        console.log('clicked')
    }
    return (
        <header className='header'>
           <h1>{title}</h1> 
           <Button color='green' text='add' />
        </header>
    );
}

Header.defaultProps = {
    title:'Task Tracker'
}

export default Header;
