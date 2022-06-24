import '../App.css';
import quotes from '../quotes.json';
import { useState } from 'react';
const Users = () => {

    const colors = ["#845ec2", "#d65db1", "#ff6f91", "#ff9671", "#ffc75f", "#f9f871"]

    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random)

    const changeUser = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setIndex(random)
    }
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomColorIndex]
    // const prevUser = () => setIndex(index-1) 
    document.body.style = `background: ${color}`
    return (
        <div className="container">
            <div className="QuoteBox" style={{ color: color }}>
                <ul>
                    <li>{quotes[index].quote}</li>
                    <li className="author">{quotes[index].author}</li>
                </ul>
                <button onClick={changeUser} style={{ backgroundColor: color }} className="rotate"></button>
                {/* <button onClick={nextUser} style={{marginLeft: "20%", marginTop: "5%"}}>Next User</button> */}

            </div>
        </div>
    )
}
export default Users;
