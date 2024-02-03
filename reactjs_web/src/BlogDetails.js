import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    // This allows to grab param from the route which is in our case /blogs/:5 for instance
    const { id } = useParams();
    // #26 Resusing custom Hooks and the block of id we trying to get
    const { data : blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    // A state to redirect the user to homepage
    const history = useHistory();

    // A function to handle delete operation
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            {/* #26 - Resusing Custom Hooks - Removed this line of code and added the next */}
            {/* <h2>Blog Details - { id }</h2> */}

            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Writtten by { blog.author }</p>
                    <div>{ blog.body }</div>
                    {/* Adding a delete button */}
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
      );
}
 
export default BlogDetails;