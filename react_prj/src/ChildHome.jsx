export default function ChildHome(props)
{
  return (
    <>
        <h1>This is child of home page </h1>
        <p>{props.name}</p>
           <p>{props.dob}</p>
              <p>{props.salary}</p>
    </>


  );


}