import { useState } from "react";

const Home = () => {

    const [name, setName] = useState("Alex")

    const clickHandler = () => {
        setName("Job");
}

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={clickHandler} > Click me</button>
        </div>
     );
}
 
export default Home;