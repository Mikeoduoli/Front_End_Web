import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    //Outputting Lists
    const [blogs, setBlogs] = useState(null


        // [
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'Julia', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Jake', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Pendo', id: 3 }
        // ]

    );

    // Displaying a loading message
    const [isPending, setIsPending] = useState(true);

    const[name, setName] = useState("Julia");





    // ---------------
    // Deleted this function in Lecture #17
    // interact with the data directly and pass this function as a prop
    // use setBlogs to change the state of id
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    // -------------

    useEffect(() => {
        // Our get request and timeout effect of 1000
        setTimeout(() => {
            fetch('http://localhost:8000/blogs') 
        // A promise with a response object
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
            })
        }, 1000)


        // console.log('use effect ran')
        // console.log(blogs);
        console.log(name);
    }, []
    // [name]
    );


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
            {/* handleDelete is passed as a prop */}
            {/* <BlogList blogs={blogs} title="Our Blogs" handleDelete={handleDelete}/> */}
            {/* <button onClick={() => setName("Obed")}>Change Name</button> */}
            {/* <h3>{ name }</h3> */}
            
            {/* Reusing React Components */}
            { isPending && <div>loading...</div>}
            { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Julia's Blogs" 
            // handleDelete={handleDelete} (For Now it is not needed)
            />}





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