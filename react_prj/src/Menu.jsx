
import AdminMenu from "./AdminMenu";
import CustomerMenu from "./CustomerMenu";
export default function Menu(props)
{
  if(props.usertype==="customer")
    return (<AdminMenu />);
  else
    return (<CustomerMenu />);
}