import { useState } from "react";

const Home = () => {

    const [name, setName] = useState("Alex")
    const [age, setAge] = useState(0)

    const clickHandler = () => {
        setName("Job");
        setAge(70);
}

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is  {age} </p>
            <button onClick={clickHandler} > Click me</button>
        </div>
     );
}
 
export default Home;