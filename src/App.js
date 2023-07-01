import logo from './logo.svg';
import './App.css';

function App() {
    const title: string = "Welcome to the new blog";
    const likes:number =50;
    const googleLink:string = "https://www.google.com/";
    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                <p>Liked {likes} times</p>
                <p>{10}</p>
                <p>{"Hello, there"}</p>
                <p>{[1,2,3]}</p>
                <p>{Math.random()*10}</p>
                <a href={googleLink}>Google Site</a>
            </div>
        </div>
    );
}

export default App;
