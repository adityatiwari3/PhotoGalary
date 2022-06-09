import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function AddImage() {
    const [show, setShow] = useState(false);

    const handleClose = async (e) => {
        setShow(false)
        const res = await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name, URL, Detail
            })
            
        });
        const data = await res.json();

        if( res.status == 201){
            window.alert("image added");
            window.location.reload();   
        }
        
    };
    const handlClose1 = ()=>{

    }
    const handleShow = () => setShow(true);

    const [Name, setName] = useState();
    const [URL, setURL] = useState();
    const [Detail, setDetail] = useState();

    return (
        <>
            <div className="container">
                <Button variant="primary" onClick={handleShow}>
                    Add New Image
                </Button>

                <Modal show={show} onHide={()=>{setShow(false)}}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add an Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form method="POST">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="email" name="Name" className="form-control" id="Email" aria-describedby="emailHelp"
                                    value={Name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">URL</label>
                                <input type="email" name="URL" className="form-control" id="URL" aria-describedby="emailHelp"
                                    value={URL}
                                    onChange={(e) => setURL(e.target.value)}
                                    placeholder="Enter URL" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Detail</label>
                                <input type="email" name="Detail" className="form-control" id="Detail" aria-describedby="emailHelp"
                                    value={Detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    placeholder="Enter Detail" />
                            </div>
                            <div className="form-group mt-3">
                                <Button type="submit" variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </div>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() =>{setShow(false)}}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default AddImage
