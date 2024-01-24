import './index.css';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" >New Blog</a>
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