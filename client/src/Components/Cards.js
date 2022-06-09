import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "../Styles/Card.css"
function Cards({ url, name, detail }) {

    const [edit, setedit] = useState(false);
    const [modalonimg, setmodalonimg] = useState(false);

    const [data, setdata] = useState({
        Name: name,
        URL: "",
        Detail: ""
    })
    const handleEdit = async (e) => {
        setedit(false);
        e.preventDefault();
        const { Name, URL, Detail } = data;
        const result = await fetch(`${Name}/edit`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                URL, Detail
            })
        })
        if (result.status == 201) {
            window.alert("Details of image change");
            window.location.reload();
        }
    }
    const handleinput = (e) => {
        const Name = e.target.name;
        const Value = e.target.value
        setdata({ ...data, [Name]: [Value] });
    }
    const deleteimg = async () => {
        const ans = window.confirm("Are you sure you want to delete?");
        if (ans) {
            const result = await fetch(`/Delete/${name}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (result.status == 201) {
                window.alert("image deleted");
                window.location.reload();
            }
        }


    }
    return (
        <>
            <div className="card col-4 p-3">
                <img className="card=img " src={url} alt="Card image cap" onClick={() => { setmodalonimg(true) }} />
                <Modal show={modalonimg} onHide={() => { setmodalonimg(false) }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add an Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <h2>Name : </h2>
                            <h5>{name}</h5>
                            <h4>Detail :</h4>
                            <p>{detail}</p>
                            <button className="btn btn-primary m-3 " onClick={() => { setedit(true) }}>
                                Edit
                            </button>
                            <Modal show={edit} onHide={() => { setedit(false) }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add an Image</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form method="POST">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="email" name="Name" className="form-control" id="Email" aria-describedby="emailHelp"
                                                value={data.Name}
                                                onChange={handleinput}
                                                placeholder="Enter Name" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">URL</label>
                                            <input type="email" name="URL" className="form-control" id="URL" aria-describedby="emailHelp"
                                                value={data.URL}
                                                onChange={handleinput}
                                                placeholder="Enter URL" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Detail</label>
                                            <input type="email" name="Detail" className="form-control" id="Detail" aria-describedby="emailHelp"
                                                value={data.Detail}
                                                onChange={handleinput}
                                                placeholder="Enter Detail" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <Button type="submit" variant="primary" onClick={handleEdit}>
                                                Save Changes
                                            </Button>
                                        </div>

                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => { setedit(false) }}>
                                        Close
                                    </Button>

                                </Modal.Footer>
                            </Modal>
                            <button className="btn btn-danger" onClick={deleteimg}>
                                Delete
                            </button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { setmodalonimg(false) }}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>

        </>
    )
}

export default Cards
