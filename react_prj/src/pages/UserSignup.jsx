import { useForm } from "react-hook-form";
export default function UserSignup()
{
    const {register,handleSubmit,watch,formState:{errors}} = useForm();
    const formSubmit=(data)=>{
        console.log(data);
    }
    return(
<div className="container-fluid py-5 mt-5">
        <div className="container">
    
        <h3>Form validation demo</h3>
            <form onSubmit={handleSubmit(formSubmit)} >

            <table>
                <tr>
                    <td>Enter First Name</td>
                    <td><input type="text" {...register("fname",{required:true,maxLength:20})} /> <br /> 
                    {errors.fname && "first name is required and maximum length 20"}
                    </td>
                </tr>
                 <tr>
                    <td>Enter Middle Name</td>
                    <td><input type="text" {...register("mname",{required:true,maxLength:20})} /><br /> {errors.mname && "last name is required and maximum length 20"}</td>
                </tr>
                <tr>
                    <td><input type="submit"  value="Register" /></td>
                </tr>

            </table>
         </form>
         
        </div></div>

    );

}