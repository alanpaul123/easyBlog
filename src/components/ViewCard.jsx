import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import SERVERURL from "../services/serverurl";

function ViewCard({ displayData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="popb">
        <img src={`${SERVERURL}/uploads/${displayData?.blogImg}`} alt="" />

        <p>
          <span className="type">{displayData?.authorName}</span>
          {displayData?.date}
        </p>
        <h2>{displayData?.title}</h2>
        <p>{displayData?.content.substr(0, 50)}...</p>
        <Button variant="primary" onClick={handleShow}>
          Read More
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modb">
            <img src={`${SERVERURL}/uploads/${displayData?.blogImg}`} alt="" />

            <p>
              <span className="c">{displayData?.authorName} </span>
              {displayData?.date}
            </p>
            <h5>{displayData?.title}</h5>
            <p>{displayData?.content}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewCard;
