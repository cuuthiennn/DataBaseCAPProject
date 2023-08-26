import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

function ModalDeleteUser(props) {
  const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } = props;

  const confirmDelete = () => {
    handleDeleteUserFromModal(dataUserDelete);
    handleClose(false);
    toast.success('Delete user successfully');
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger fw-bold">This action can't be undone!</p>
          <p className="text-dark">
            Do you want to delete this user, email ={' '}
            <label className="fw-bold text-warning">{dataUserDelete.email}</label>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;
