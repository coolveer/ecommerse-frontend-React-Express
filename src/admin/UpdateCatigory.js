import React, { useState, useEffect }  from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { updateCategory, getACategory } from './helper/adminapicall';

const UpdateCatigory = ({match}) => {

    const [name,setName] = useState("initialState")
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)

    const {user , token} = isAuthenticated()

    const preload = () => {
        getACategory(match.params.categoryId).then(data => {
            if (data.error) {
                console.log(data.error)
            }else {
                setName(data.name)
            }
        })

    }

    useEffect(() => {
        preload()
    },[])

    const successMessage = () => {
        if (success) {
            return(<h4 className="text-success">Your Category has been Updated</h4>)
        }
    }

    const errorMessage = () => {
        if (error) {
            return(<h4 className="text-danger">Failed to update category</h4>)
        }
    }

    const goBack = () => {
        return(
            <div className="mt-5">
                <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard"> Admin Home</Link>
            </div>
        )
    }

    const handelChange = (event) => {
        setError("")
        setName(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setError("")
        setSuccess("")

        //backend request fired
        updateCategory(match.params.categoryId,user._id,{name},token)
        .then(data => {
            if (data.error) {
                setError(true)
            }else{
                setError("")
                setSuccess(true)
                setName("")
            }
        })
    }

    const muCategoryForm = () => {
        return(
            <form>
                <div className="form-group">
                    <p className="lead">Enter Category Here</p>
                    <input type="text"
                    className="form-control my-3"
                    autoFocus
                    onChange={handelChange}
                    required
                    value = {name}
                    placeholder="for ex. Summer"
                    />
                    <button onClick={onSubmit} className="btn btn-outline-success " >Update Category</button>
                </div>
            </form>
        )
    }

    return(
        <Base title="Update Category" discription="Update amezing tshirt category " className="container bg-success p-4">
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                {successMessage()}
                {errorMessage()}
                {muCategoryForm()}
                {goBack()}
                </div>
            </div>
        </Base>
    )
}

export default UpdateCatigory;