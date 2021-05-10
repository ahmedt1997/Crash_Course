

const Button = ({color , text}) => {
    return (
        <div>
            <button onClick={onclick} style={{backgroundColor:color}} className='btn'>{text}</button>
        </div>
    );
}

export default Button;
