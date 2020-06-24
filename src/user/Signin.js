import React, {useState} from 'react';
import Base from '../core/Base';
import {Link, Redirect} from "react-router-dom";
import {signin,authenticate,isAuthenticated} from "../auth/helper"

const Signin = () => {

    const [values,setValues] = useState({
        email : "ruchi@gmail.com",
        password : "12345",
        error : "",
        loading : false,
        didRedirect : false
    })

    const {email,password,error,didRedirect,loading} = values
    const {user} = isAuthenticated()

    const handelChange = email => event => {
        setValues({...values ,error:false,[email]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data => {
            if (data.error) {
                setValues({...values,error: data.error,loading : false})
            }else {
                authenticate(data,() => {
                    setValues({
                        ...values,
                    didRedirect: true
                    })
                })
            }
        })
        .catch(
            console.log("signin request failed")
        )
    }
    const performRedirect = () => {
        if (didRedirect) {
            if (user && user.role == 1) {
                return <Redirect to="/admin/dashboard" />
            }else {
                return <Redirect to="/user/dashboard" />
            }
        }
    }

    const loadingMsg = () =>{
        return(
            loading && (
                <div className="alert alert-info">
                    <h2>Loading......</h2>
                </div>
            )
        )    
    }

    const errorMsg = () =>{
        return(
            <div className="alert alert-danger" style={{display : error ? "" : "none"}}>
                {error}
            </div>
        )
    }

    const signInForm = () => {
        return (
            <div className = "row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Email:</label>
                            <input value={email} onChange={handelChange("email")}  type="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">Passord:</label>
                            <input value={password} onChange={handelChange("password")} type="password" className="form-control"/>
                        </div>
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    return(
        <Base title = "Signin Page" discription="this a page for user signin!">
            {loadingMsg()}
            {errorMsg()}
            {signInForm()}
            {performRedirect()}
    <p clasName="d-flex justify-content-center test-white">{JSON.stringify(values)}</p>
        </Base>
    )
}

export default Signin;