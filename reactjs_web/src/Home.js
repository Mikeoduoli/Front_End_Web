import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    //#20 Renaming data to blogs in this file
    const { data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // #20 Also this one moved to a custom hook
    //Outputting Lists
    // const [blogs, setBlogs] = useState(null


        // [
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'Julia', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Jake', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Pendo', id: 3 }
        // ]

    // );

    // #20 Moving this section to a custom hook file(useFetch.js)
    // Displaying a loading message
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // const[name, setName] = useState("Julia");





    // ---------------
    // Deleted this function in Lecture #17
    // interact with the data directly and pass this function as a prop
    // use setBlogs to change the state of id
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    // -------------

    


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

            {/* Conditional rendering for error */}
            { error && <div>{ error }</div> }


            {/* Working with Props */}
            {/* handleDelete is passed as a prop */}
            {/* <BlogList blogs={blogs} title="Our Blogs" handleDelete={handleDelete}/> */}
            {/* <button onClick={() => setName("Obed")}>Change Name</button> */}
            {/* <h3>{ name }</h3> */}
            
            {/* Reusing React Components */}
            { isPending && <div>loading...</div>}

            {/* To effect the change, this code is commented out (skip to #25)
            { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Julia's Blogs" 
            // handleDelete={handleDelete} (For Now it is not needed)
            />} */}

            {/* Route Param #25 */}
            { blogs && <BlogList blogs={blogs} />}





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