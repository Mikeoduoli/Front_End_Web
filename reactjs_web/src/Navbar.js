import './index.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">

                {/* Changing the <a> tags to Link <a href="/">Home</a> */}
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;


// Dynamic Values
// style={{
//     color: 'white',
//     backgroundColor: '#f1356d',
//     borderRadius: '8px'
// }}