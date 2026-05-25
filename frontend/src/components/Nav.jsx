import { Link } from "react-router-dom";
export default function Nav()
{
    return ( <>
<nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/userlist">User List</Link></li>
             <li><Link to="/contextdemo">Context-Demo</Link></li>
          </ul>
        </nav> </> );
}