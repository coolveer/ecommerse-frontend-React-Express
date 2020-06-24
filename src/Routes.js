import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import UserDashboard from './user/UserDashBoard';
import AdminDashboard from './user/AdminDashBoard';
import Profile from './user/Profile';
import  AdminRoute  from "./auth/helper/AdminRoutes";
import  PrivateRoute  from "./auth/helper/PrivateRoutes";
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/manageCategories';
import AddProducts from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCatigory from './admin/UpdateCatigory';
import Cart from './core/Cart';


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/cart" exact component={Cart} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/admin/create/category" exact component={AddCategory} />
                <AdminRoute path="/admin/category" exact component={ManageCategories} />
                <AdminRoute path="/admin/create/products" exact component={AddProducts} />
                <AdminRoute path="/admin/products" exact component={ManageProducts} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <AdminRoute path="/admin/catigory/update/:categoryId" exact component={UpdateCatigory} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;