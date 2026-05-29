import {Link} from 'react-router-dom'

export default function Header()
{
 return (
         
    <div className="container-fluid nav-bar p-0" style={{'backgroundColor':'black'}}>
        <div className="container-lg p-0">
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                <a href="index.html" className="navbar-brand">
                    <h1 className="m-0 text-white display-4"><span className="text-primary">D</span>ot<span className="text-primary">C</span>om</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                       <Link to="/aboutus" className="nav-item nav-link active">Aboutus</Link>
                       <Link to="/statedemo" className="nav-item nav-link active">State Demo</Link>
                       <Link to="/serivces" className="nav-item nav-link active">Services</Link>
                        <Link to="/signup" className="nav-item nav-link active">Signup</Link>
                       <Link to="/contactus" className="nav-item nav-link active">Contactus</Link>
                        <Link to="/useeffectdemo" className="nav-item nav-link active">useEffect</Link>
                       
                        
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">other hooks</a>
                            <div className="dropdown-menu border-0 rounded-0 m-0">
                               
                                 <Link to="/usememodemo" className="dropdown-item">useMemo</Link>
                                 <Link to="/useCB" className="dropdown-item">useCallback</Link>
                                  <Link to="/useCBParentChild" className="dropdown-item">useCBPC</Link>
                                  <Link to="useformdemo" className="dropdown-item">Form validation</Link>
                                   <Link to="/usereducer" className="dropdown-item">use Reducer</Link>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </nav>
        </div>
    </div>


 )


}