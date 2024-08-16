import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addCustomer } from '../service/AllApi';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Add() {

    const [formData,setFormData]=useState({
        name:"",book_title:"",author:"",price:""
    })

    const navigate=useNavigate()


    const getData=(e)=>{
        // console.log(e.target.value);
        e.preventDefault()
        console.log(formData);

        
        const {name,book_title,author,price}=formData
        if(!name || !book_title || !author ||  !price){
            // alert("invallid input")
            toast.warning("Invallid input")
        }
        else{
            addCustomer({name,book_title,author,price}).then((res)=>{
                console.log(res.data);
                // alert("Employee added successfully!")
                toast.success("Customer added succesfully!")
                setFormData({ name:"",book_title:"",author:"",price:""})
                navigate('/')
            }).catch((err)=>{
                console.log(err);
                // alert("Something went wrong!")
                toast.error("Something went wrong!")

            })
        }

    }

    const formCancel=()=>{
        setFormData({ name:"",book_title:"",author:"",price:""})
        navigate('/')
    }

  return (
    <>
        <Header/>
         
        <div className='container-fluid d-flex flex-column align-content-center justify-content-center p-5'>
        <div className='p-5 border shadow w-50 mx-5'>
            <form action="">
                <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>(setFormData({...formData,name:e.target.value}))} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingBookTitile" label="BookTitle" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>(setFormData({...formData,book_title:e.target.value}))} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingAuthor" label="Author" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>(setFormData({...formData,author:e.target.value}))} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPrice" label="Price" className="mb-3">
                    <Form.Control type="number" placeholder="" onChange={(e)=>(setFormData({...formData,price:e.target.value}))} />
                </FloatingLabel>
                
                <div className='d-flex justify-content-between'>
                    <button className='btn btn-success' type='submit' onClick={(e)=>getData(e)}>Submit</button>
                    <button className='btn btn-danger' type='button' onClick={formCancel}>Cancel</button>
                </div>
            </form>
        </div>

    </div>
        
        <Footer/>
 </>
  )
}

export default Add