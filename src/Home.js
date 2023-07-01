import {useState} from "react";

const Home = () => {
    const [name,setName] = useState('mario');
    const [age,setAge] = useState(25);
    const handleClick = (e)=>{
        setName('Sandeera');
        setAge(30)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p> {name}</p>
            <p>{age}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;