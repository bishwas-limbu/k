
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom"

const CartModal = ({show,handleClose}:any) => {
  const navigate = useNavigate();
  return (
    <Modal 
      show ={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    
    >
        <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          your chosen product has been added to your cart
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=>navigate("/")}>Go to Cart</Button>
        </Modal.Footer>
    </Modal> 
  );
};
export default CartModal;