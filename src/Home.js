const clickHandler = (e) => {

        console.log("Hey Miseda", e.target);
}

const clickHandlerAgain = (name, e) => {
        console.log("Hey " + name, e.target);
}

const Home = () => {
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={clickHandler} > Click me</button>
            <button onClick = { (e) => clickHandlerAgain("Alex", e)} >Click me again</button>
        </div>
     );
}
 
export default Home;