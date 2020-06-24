import React, {useState} from 'react';
import Base from '../core/Base';
import {Link} from "react-router-dom";
import { signup } from '../auth/helper';

const Signup = () => {

    const [values,setValue] = useState({
        name : "",
        email : "",
        password : "",
        error : "",
        success : false
    })

    const {name,email,password,error,success} = values

    const handelChange = name => event => {
        setValue({...values ,error:false,[name]: event.target.value})
    }
    const onSubmit = event => {
        event.preventDefault();
        setValue({...values,error:false});
        signup({name,email,password})
            .then(data => {
                if (data.error){
                    setValue({...values,error:data.error,success:false})
                }else{
                    setValue({
                        name : "",
                        email : "",
                        password : "",
                        error : "",
                        success : true
                    })
                }
            })
            .catch(console.log("error in signup"))
    }

    const successMsg = () =>{
        return(
            <div className="alert alert-success" style={{display : success ? "" : "none"}}>
                new account has been created success fully <Link to="/signin">login here</Link>
            </div>
        )
    }

    const errorMsg = () =>{
        return(
            <div className="alert alert-danger" style={{display : error ? "" : "none"}}>
                {error}
            </div>
        )
    }

    const signUpForm = () => {
        return (
            <div className = "row">
                <div className="col-md-6 offset-sm-3 text-left">
                    {successMsg()} {errorMsg()}
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name:</label>
                            <input onChange={handelChange("name")} value={name} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email:</label>
                            <input onChange={handelChange("email")} value={email}  type="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Passord:</label>
                            <input onChange={handelChange("password")} value={password} type="password" className="form-control"/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    
    return(
        <Base title = "Signup Page" discription="this a page for user signup!">
            {signUpForm()}
            {JSON.stringify(values)}
        </Base>
    )
}

export default Signup;