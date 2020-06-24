import React from 'react';
import  Base  from "../core/Base";
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const { user : {name,email,role} } = isAuthenticated()

const adminLeftSide = () => {
    return (
        <div className="card">
            <h4 className="bg-dark text-white card-header">
                Admin Navigation
            </h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/create/category" className="nav-link text-success">
                        create category 
                    </Link>
                </li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/category" className="nav-link text-success">
                        Mange category 
                    </Link>
                </li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/create/products" className="nav-link text-success">
                        create product 
                    </Link>
                </li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/products" className="nav-link text-success">
                        manage product 
                    </Link>
                </li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/orders" className="nav-link text-success">
                        manage orders 
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const adminRightSide = () => {
    return(
        <div className="card">
            <h4 className="card-header">Admin information</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="badge badge-success">Name:  </span> &nbsp; &nbsp;{name}
                </li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="badge badge-success">email:  </span> &nbsp; &nbsp; {email}
                </li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item">
                <span className="badge badge-danger">Admin Area</span>
                </li>
            </ul>
            
        </div>
    )
}

    return(
        <Base title="Admin area" discription="manage your products here" className="container bg-success p-4">
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>
        </Base>
    )
}

export default AdminDashboard;