import API from "../../backend";

export const createOrder = (userId,token,orderData) => {
    return fetch(`${API}/order/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"Application/json",
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({order:orderData})
    }).then(response => {
        return response.json()
    })
    .then( err => console.log(err))
}