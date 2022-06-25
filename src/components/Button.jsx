import '../App.css';
const Button = ({ changeUser, color}) => {
    return (
            <div className="button">
                <button onClick={changeUser} style={{ backgroundColor: color }} className="rotate"><i className="fa-solid fa-arrows-rotate"></i></button>
            </div>
    )
}
export default Button;
