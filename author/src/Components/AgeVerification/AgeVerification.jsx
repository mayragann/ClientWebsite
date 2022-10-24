import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AgeVerification() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);



    return (
        <>


            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={true}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    You must be at least 18 to enter
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>
                        Over 18
                    </Button>
                    <Button variant="primary"
                        >Not Over 18</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AgeVerification;
