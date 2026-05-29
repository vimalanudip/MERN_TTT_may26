// component name must start with Capital letter and file name is same as component name 
import ChildHome from "./ChildHome";
import Menu from './Menu';
export default function Home()
{
	let msg="";
	function setmsgvalue()
	{
		msg="hello how are you ";
		console.log(msg);
	}
   return (
	<>
	<div className="container-fluid py-5">
        <div className="container">
    
		<h1>Home page of our application</h1>
		<ChildHome name="sunil kumar" dob="23-12-1999" salary="45000"/>
		<Menu usertype="customer" />
		<input type="button" onClick={setmsgvalue} value="Click to set msg" />
		<p>Here you will see the msg when you click on button <br />
		  {msg.length>0 && msg}
		</p>
		</div></div>
	</>
   )
}