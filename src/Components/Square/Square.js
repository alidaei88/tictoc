import './Square.css';

const Square = ({value, clickHandle, index}) => {
    return(
        <div className="square" onClick={() => clickHandle(index)} >
                {value}
        </div>
    )
}

export default Square;