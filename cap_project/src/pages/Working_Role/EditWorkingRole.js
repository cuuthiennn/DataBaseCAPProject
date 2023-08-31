import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const EditWorkingRole = (props) => {
  const { show, handleClose, hanleEditWorkingRole, data } = props;

  const [name, setName] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [childrentName, setChildrentName] = useState('');
  const [path, setPath] = useState([]);

  const handleSaveUser = () => {
    data.name = name;
    hanleEditWorkingRole(data);
    toast.success('Edt working role successfully');
    handleClose(false);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleAddPath();
    }
  };

  const handleAddPath = () => {
    if (name) {
      setPath([...path, childrentName]);
      setChildrentName('');
      setShowInput(false);
    }
  };

  useEffect(() => {
    if (show) {
      setName(data.name);
    }
  }, [show, data]);

  return (
    <>
      <Modal show={show} onHide={handleClose} variant="dark" style={{ color: '#000' }}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Working Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </form>
          <hr />
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
                  value={childrentName}
                  onChange={(e) => setChildrentName(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button
                  className="btn btn-sm"
                  onClick={() => {
                    setShowInput(false);
                    setChildrentName('');
                  }}
                >
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

export default EditWorkingRole;
