import {toast,ToastContainer} from "react-toastify";
import { useState } from "react";

import {Link,useNavigate} from "react-router-dom";

const MyLogin = ()=>{

    const navigate = useNavigate();

    const navigatToRegister = ()=> navigate("/signup",{replace:true});

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12">
                    <div className="w-50 mx-auto">
                        <div className="card border-0 shadow-lg">
                            <div className="card-header">
                                <i className="fa fa-lock"></i>Login
                                
                                <Link className="float-end text-decoration-none" to="/signup" onClick={()=> navigatToRegister()}>Register</Link>
                            </div>
                            <div className="card-body">
                                <div className="mb-4">
                                    <input type="email" name=""  className="form-control mb-5" placeholder="Email id"/>
                                    <input type="password" name=""  className="form-control mb-5" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-danger">
                                    Login <i className="fa fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLogin;