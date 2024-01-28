import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    // Creating a state to track changes inserted
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false); 
    // #30
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // creating a blog object to store values

        const blog = { title, body, author };

        //Seting the load status
        setIsPending(true);

        //creating a fetch api
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog added");
            setIsPending(false);
            // redirecting to home route
            history.push("/")
        })

        // console.log(blog);
    }


    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            {/* Creating input fields */}
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;