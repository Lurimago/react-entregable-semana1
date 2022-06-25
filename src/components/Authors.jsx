import '../App.css';
const Authors = ({quotes, index, color}) => {
    return (
            <div className="authorsBox" style={{ color: color }}>
                <ul>
                    <li className="author">{quotes[index].author}</li>
                </ul>
            </div>
    )
}
export default Authors;
