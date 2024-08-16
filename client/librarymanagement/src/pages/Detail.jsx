import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Detail(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(props.cust);

    

  return (
    <>
    <div>
        <button className='btn btn-info' onClick={handleShow}>View</button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{show.book_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Customer Name:{show.name}</h4>
            <h4>Author:{show.author}</h4>
            <h4>Price:{show.price}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Detail