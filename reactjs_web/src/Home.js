import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    //Outputting Lists
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])



    // let name = 'Julia';

    //Getting started with React useState hook
    // const[name, setName] = useState('Julia');
    // const[age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('Maya');
    //     setAge(30);
    // }

    // const handleClick = (e) => {
    //     console.log('Hello, React ninjas!', e);
    // }

    // Demonstranting event target
    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target);
    // }


    return ( 
        <div className="home">
            {/* Working with Props */}
            <BlogList blogs={blogs} title="Our Blogs"/>
            {/* Reusing React Components */}
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs"/>





            {/* <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e) => {
                handleClickAgain('Julia', e)
            }}>Click me again</button> */}
        </div>
     );
}
 
export default Home;