import { Link } from "react-router-dom";

function Header() {
    return ( 
        <div>
            <Link to="/allposts">All Posts</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/">Main</Link>
        </div>
     );
}

export default Header;