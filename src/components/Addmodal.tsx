
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddModal = ({show,handleAddModalClose,handleAddChange,handleSubmit}:any) => {
 // console.log(handleAddModalClose);
  return (
    <Modal 
      show ={show}
      onHide={handleAddModalClose}
      backdrop="static"
      keyboard={false}
    
    >
        <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input 
        type="text" 
        className="form-control"  
        placeholder="Product title" 
        name = "title"
        onChange = {handleAddChange}
       
        />
        <input 
        type="text" 
        className="form-control mt-3"  
        placeholder="Product description" 
        name = "description"
        onChange = {handleAddChange}
        />

        <input 
        type="text" 
        className="form-control mt-3"  
        placeholder="Product price" 
        name = "price"
        onChange = {handleAddChange}
        />

        <input 
        type="text" 
        className="form-control mt-3"  
        placeholder="Image UrL"
        name = "thumbnail"
        onChange = {handleAddChange}
        />
        
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick = {handleAddModalClose}> Close </Button>
        <Button variant="primary" onClick = {handleSubmit} >Add product</Button>
        </Modal.Footer>
  </Modal> 
  );
};
export default AddModal;