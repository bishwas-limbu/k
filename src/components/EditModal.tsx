
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditModal = ({
  show,
  handleClose,
  product,
  handleChange,
  handleEditChanges,
}: any) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Product Title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Enter Product Description"
          value={product.description}
          name="description"
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Image UrL"
          value={product.image}
          name="image"
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Price"
          value={product.price}
          name="price"
          onChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditChanges}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditModal;
