import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";


const AgeVerification = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate()
   
    function handleCloseButton(){
      navigate("/")
      setShow(false)
    }
    function handleCloseButtonUnderAge(){
      navigate("/NotOldEnough")
      setShow(false)
    }



    return (
        <>


            <Modal show={show}
             
                backdrop="static"
                keyboard={true}>
                
                <Modal.Body>
                    You must be at least 18 to enter
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleCloseButton}>
                        Over 18
                    </Button>
                    <Button variant="primary"
                        onClick={handleCloseButtonUnderAge}>Not Over 18</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AgeVerification;
