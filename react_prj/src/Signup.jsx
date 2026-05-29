import { useState } from "react";

export default function Signup()
{
  const [userForm, setUserForm] =useState({
        fname:'',
        mname:'',
        lname:'',
        gender:'',
        dob:'',
        phoneno:0

  });
  const sendData=(e)=>{
    e.preventDefault();
    console.log(userForm);
    //axios.post(URL,{userForm}).then().catch();
  }
  return (
        <>  
            <h2>Signup with us</h2>
        <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center">
                <small className="bg-primary text-white text-uppercase font-weight-bold text-center px-1">Get In Touch</small>
                <h1 className="mt-2 mb-5">Contact For Any Queries</h1>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="d-flex align-items-center border mb-3 p-4">
                        <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Our Office</h5>
                            <p className="m-0">123 Street, New York, USA</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border mb-3 p-4">
                        <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Email Us</h5>
                            <p className="m-0">info@example.com</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border mb-3 mb-md-0 p-4">
                        <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Call Us</h5>
                            <p className="m-0">+012 345 6789</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm"  onSubmit={sendData}>
                            
                            <div className="control-group">
                                <input type="text" className="form-control p-4"  placeholder="Enter First Name" onChange={(e)=>setUserForm({...userForm,fname:e.target.value})} /> 
                                <p className="help-block text-danger">{userForm.fname}</p>
                            </div>
                                <div className="control-group">
                                <input type="text" className="form-control p-4"  placeholder="Enter MIddle Name" onChange={(e)=>setUserForm({...userForm,mname:e.target.value})} /> 
                                <p className="help-block text-danger">{userForm.mname}</p>
                            </div>
                              <div className="control-group">
                                <input type="text" className="form-control p-4"  placeholder="Enter Last Name" onChange={(e)=>setUserForm({...userForm,lname:e.target.value})} /> 
                                <p className="help-block text-danger">{userForm.lname}</p>
                            </div>
                              <div className="control-group">
                                <input type="date" className="form-control p-4"  placeholder="Choose DOB" onChange={(e)=>setUserForm({...userForm,dob:e.target.value})} /> 
                                <p className="help-block text-danger">{userForm.dob}</p>
                            </div>
                              <div className="control-group">
                                <input type="number"  className="form-control p-4"  placeholder="Enter Phone number" onChange={(e)=>setUserForm({...userForm,phoneno:e.target.value})} /> 
                                <p className="help-block text-danger">{userForm.phoneno}</p>
                            </div>
                            <div className="control-group">
                                <input type="radio" name="gender"   value="male"    onChange={(e)=>setUserForm({...userForm,gender:e.target.value})} /> Male | <input type="radio" name="gender" cla  value="female"    onChange={(e)=>setUserForm({...userForm,gender:e.target.value})} /> FeMale 
                                <p className="help-block text-danger">{userForm.gender}</p>
                            </div>
                            <div>
                                <button className="btn btn-primary font-weight-semi-bold px-4" style={{'height': '50px'}} type="submit" id="sendMessageButton">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


        </>


  );


}