const Home = () => {
    const handleClick = (e)=>{
        console.log("hello, Sandeera " , e);
    }

    const handleClickAgain = (name,e)=>{
        // console.log("hello," + name);
        console.log("My name is " + name,e.target)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickAgain("Sandeera",e)}>Click Me 2</button>
        </div>
    );
}

export default Home;