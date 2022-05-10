import './Square.css';

const Square = ({value, clickHandle, index}) => {
    return(
        <div className={`square ${value === "X" ? "xStyle" : "oStyle"}`} onClick={() => clickHandle(index)} >
                {value}
        </div>
    )
}

export default Square;