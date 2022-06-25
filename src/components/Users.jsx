import '../App.css';

    const Users = ({ quotes, index, color}) => {
        return (
                <div className="usersBox" style={{ color: color}}>
                    <ul>
                        <li className="author">{quotes[index].quote}</li>
                    </ul>
                </div>
        )
    }
export default Users;
