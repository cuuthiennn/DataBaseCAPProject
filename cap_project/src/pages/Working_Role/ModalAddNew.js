import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ModalAddNew = (props) => {
  const { show, handleClose, handleAddWorkingRole } = props;

  const [path, setPath] = useState([]);
  const [name, setName] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleAddPath = () => {
    if (name) {
      setPath([...path, name]);
      setName('');
      setShowInput(false);
    }
  };

  const handleRemove = () => {
    setShowInput(false);
    setName('');
  };

  const handleKeyPress = (event) => {
    console.log(event);
    if (event.keyCode === 13) {
      handleAddPath();
    }
  };

  const handleSaveUser = () => {
    handleAddWorkingRole(path);
    handleClose(false);
    toast.success('Add new Working Role successfully ');
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} variant="dark" style={{ color: '#000' }}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Working Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            {path.map((namePath, index) => {
              return (
                <div key={index}>
                  {namePath}
                  {index !== path.length - 1 && <span className="me-1">/</span>}
                </div>
              );
            })}
            {showInput ? (
              <>
                <input
                  type="text"
                  placeholder="Nhập tên..."
                  className="me-1 ms-1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button className="btn btn-sm" onClick={handleRemove}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </>
            ) : (
              <button className="btn btn-sm ms-1" onClick={() => setShowInput(true)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNew;
