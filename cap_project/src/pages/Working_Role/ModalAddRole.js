import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ModalAddRole = (props) => {
  const { show, handleClose, handleUpdateTable } = props;

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [executor, setExecutor] = useState('');
  const [timeChange, setTimeChange] = useState('');
  const [numberOfUsers, setNumberOfUsers] = useState('');

  const handleSaveUser = async () => {
    setId('');
    setName('');
    setDescription('');
    setExecutor('');
    setTimeChange('');
    setNumberOfUsers('');

    toast.success('Create Role Successfully');

    handleUpdateTable({ id, name, description, executor, timeChange, numberOfUsers });

    handleClose(false);
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={handleClose} variant="dark" style={{ color: '#000' }}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name Role
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <Col className="col-xs-12 col-md-6">
                <label htmlFor="parentRole" className="form-label">
                  Name Role
                </label>
                <select className="form-select" id="parentRole">
                  <option value="">Don't have</option>
                  <option value="VietNam">Viet Name</option>
                </select>
              </Col>
            </div>
            <Row>
              <Col xs={12} md={6}>
                <div className="mb-3">
                  <label htmlFor="executor" className="form-label">
                    Executor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="executor"
                    value={executor}
                    onChange={(event) => setExecutor(event.target.value)}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="mb-3">
                  <label htmlFor="timeChange" className="form-label">
                    Time Change
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="timeChange"
                    value={timeChange}
                    onChange={(event) => setTimeChange(event.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <div className="mb-3">
                  <label htmlFor="numberOfUsers" className="form-label">
                    Number Of Users
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="numberOfUsers"
                    value={numberOfUsers}
                    onChange={(event) => setNumberOfUsers(event.target.value)}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="description"
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
              </Col>
            </Row>
          </form>
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

export default ModalAddRole;
