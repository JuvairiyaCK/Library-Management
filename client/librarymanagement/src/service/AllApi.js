import commonApi from "./commonApi";


export const addCustomer=(data)=>{
    return commonApi("POST","http://127.0.0.1:8000/customer/",data)
}

export const listCustomer=()=>{
    return commonApi("GET","http://127.0.0.1:8000/customer/","")
 
}


export const deleteCustomer=(id)=>{
    return commonApi("DELETE",`http://127.0.0.1:8000/customer/${id}/`,"")
}


export const getCustomer=(id)=>{
    return commonApi("GET",`http://127.0.0.1:8000/customer/${id}/`,"")
}


export const editCustomer=(id,data)=>{
    return commonApi("PUT",`http://127.0.0.1:8000/customer/${id}/`,data)
}