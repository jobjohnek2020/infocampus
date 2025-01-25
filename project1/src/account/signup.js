import {toast,ToastContainer} from "react-toastify";
import { useState } from "react";

import {Link} from "react-router-dom";

const Register = ()=>{

    const[user,setUser] = useState({});
    const[allerror,setError] = useState({});

    const pickValue = (obj) => {
        user[obj.target.name] = obj.target.value;
        setUser(user);
    };

    const save = (frmobj)=>{
        frmobj.preventDefault();
        let errors = {};
        if( !user.mobno || user.mobno === ""){
            errors.mobno = "Invalid mobile number";
        } 
        if( !user.fname || user.fname === ""){
            errors.fname = "Invalid name";
        } 
        if( !user.email || user.email === ""){
            errors.email = "Invalid email";
        }
        setError(errors);
    };
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12">
                    <form action="" className="form-control border-0" onSubmit={save}>
                        <div className="w-50 mx-auto">
                            <div className="card border-0 shadow-lg">
                                <div className="card-header">
                                    <i className="fa fa-lock"></i>Register
                                </div>
                                <div className="card-body">
                                    <div className="mb-4">
                                        <div className="mb-5">
                                            <input type="text" name="mobno" className="form-control" placeholder="Mobile number" onChange={pickValue}/>
                                            {allerror.mobno !== "" ? <span>{allerror.mobno}</span> : "" }
                                        </div>
                                        <div className="mb-5">
                                            <input type="text" name="fname" className="form-control" placeholder="Full Name" onChange={pickValue}/>
                                            {allerror.fname !== "" ? <span>{allerror.fname}</span> : "" }
                                        </div>
                                        <div className="mb-5">
                                            <input type="email" name="email"  className="form-control" placeholder="Email id" onChange={pickValue}/>
                                            {allerror.email !== "" ? <span>{allerror.email}</span> : "" }
                                        </div>
                                        <input type="password" name="password"  className="form-control mb-5" placeholder="Password" onChange={pickValue}/>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-danger">
                                        Register <i className="fa fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;