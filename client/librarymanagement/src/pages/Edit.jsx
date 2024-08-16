import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getCustomer } from '../service/AllApi';
import { editCustomer } from '../service/AllApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Edit() {

    const [custData,setCustData]=useState({
        id:"",name:"",book_title:"",author:"",price:""
     })
 
 
     const navigate=useNavigate()
 
      const {id}=useParams()
      console.log(id);
 
 
      useEffect(()=>{
         getCustData()
      },[])
 
      const getCustData=()=>{
         getCustomer(id).then((res)=>{
             console.log(res.data);
             setCustData({id:res.data.id,name:res.data.name,book_title:res.data.book_title,author:res.data.author,price:res.data.price})
         })
      }
 
      const updateData=(e)=>{
         e.preventDefault()
         const {name,book_title,author,price}=custData
         if(!name || !book_title ||  !author || !price){
             toast.warning("invallid data")
         }
         else{
             console.log(custData);
             editCustomer(custData.id,{name,book_title,author,price})
             toast.success("Customer edited")
             navigate('/')
         }
      }
 
      const cancelData=()=>{
         getCustData()
         navigate('/')
     }
  return (
    <>
         <Header/>
         <div className='container-fluid d-flex flex-column align-content-center justify-content-center p-5'>
        <div className='p-5 border shadow w-50 mx-5'>
            <form action="">
            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                    <Form.Control type="text" placeholder="" value={custData.name} onChange={(e)=>(setCustData({...custData,name:e.target.value}))} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingBookTitle" label="BookTitle" className="mb-3">
                    <Form.Control type="text" placeholder="" value={custData.book_title}  onChange={(e)=>(setCustData({...custData,book_title:e.target.value}))} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingAuthor" label="Author" className="mb-3">
                    <Form.Control type="text" placeholder="" value={custData.author} onChange={(e)=>(setCustData({...custData,author:e.target.value}))} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPrice" label="Price" className="mb-3">
                    <Form.Control type="number" placeholder="" value={custData.price} onChange={(e)=>(setCustData({...custData,price:e.target.value}))} />
                </FloatingLabel>
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-success' type='submit' onClick={(e)=>updateData(e)}>Edit</button>
                    <button className='btn btn-danger' type='button' onClick={cancelData}>Cancel</button>
                </div>
            </form>
        </div>

    </div>
         <Footer/>
    </>
  )
}

export default Edit