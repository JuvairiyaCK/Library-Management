import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Detail from './Detail';
import { toast } from 'react-toastify';
import { deleteCustomer, listCustomer } from '../service/AllApi';


function Home() {
    const [cust,setCust]=useState([])

    useEffect(()=>{
        getAllCustomer()
    },[])


    const getAllCustomer=()=>{
        listCustomer().then((res)=>{
            console.log(res.data);
            setCust(res.data)
        })
    }


    const deleteData=(id)=>{
        console.log(id);
        deleteCustomer(id).then((res)=>{
            console.log(res);
            toast.success("Customer deleted")
            getAllCustomer()
        }).catch((err)=>{
            console.log(err);
        })

    }
  return (
    <>
    <Header/>

    <div className='d-flex justify-content-center'>
           <h1>Welcome to library Management System</h1> 
    </div>
    <div className='m-4'>
        <Row>
            <Col sm={12} md={4}>
                <Link to={'/add'} className='btn btn-success'>Add customer</Link>
            </Col>
            <Col sm={12} md={8}>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            cust.length > 0 ?
                                cust.map(res=>(
                                    <tr>
                                        <td>{res.name}</td>
                                        <td>{res.book_title}</td>
                                        <td>{res.author}</td>
                                        <td>{res.price}</td>
                                        <td>
                                            <Detail cust={res}/>
                                            <Link to={`/edit/${res.id}`} className='btn btn-info mx-2 my-1'><i className="fa-solid fa-pen-to-square" /></Link>
                                            <button className='btn btn-danger mx-2' onClick={()=>{deleteData(`${res.id}`)}}><i className="fa-solid fa-trash" /></button>
                                        </td>
                                    </tr>
                                ))
                            
                            :
                            <h3>No data</h3>
                        }
                    </tbody>
                </table>
            </Col>
        </Row>
        </div>

    <Footer/>
    </>
  )
}

export default Home