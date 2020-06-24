import API from "../../backend";


// category calls
export const createCategory = (userId,token,category) => {
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//get all categories

export const getCategories = () => {
    return fetch(`${API}category/all`,{
        method : "GET"
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

// delete the category

export const deleteCategories = (categoryId,userId,token) => {
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"DELETE",
        headers : {
            Accept:"application/json",
            Authorization : `Bearer ${token}`
        }
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

// updating a category

export const updateCategory = (categoryId,userId,category,token) => {
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type" : "application/json",
            Authorization : `Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

// get a category

export const getACategory = categoryId => {
    return fetch(`${API}/category/${categoryId}`,{
        method : "GET"
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


// Product calls

//create a product
export const createProduct = (userId,token,product) => {
    return fetch(`${API}/product/create/${userId}`,{
        method : "POST",
        headers : {
            Accept:"application/json",
            Authorization : `Bearer ${token}`
        },
        body:product
    }).then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}

//get all products

export const getProducts = () => {
    return fetch(`${API}/products`,{
        method : "GET",
        "Content-Type" : "application/json"
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

// delete product
export const deleteProduct = (productId,userId,token) => {
    return fetch(`${API}/product/${productId}/${userId}`,{
        method : "DELETE",
        headers : {
            Accept:"application/json",
            Authorization : `Bearer ${token}`
        }
    }).then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}

//get a product 

export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`,{
        method:"GET"
    }).then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//update a product 

export const updateProduct = (productId,userId,token,product) => {
    return fetch(`${API}/product/${productId}/${userId}`,{
        method : "PUT",
        headers : {
            Accept:"application/json",
            Authorization : `Bearer ${token}`
        },
        body:product
    }).then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}