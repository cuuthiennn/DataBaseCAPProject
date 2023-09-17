import { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { putUpdateUser } from '~/components/servers/UsersService';

function ModalEditUser(props) {
  const { show, handleClose, dataUserEdit } = props;

  const [id, setId] = useState();
  const [user_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(true);
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (show) {
      setId(dataUserEdit.id);
      setUsername(dataUserEdit.user_name);
      setPassword(dataUserEdit.password);
      setFirstName(dataUserEdit.first_name);
      setLastName(dataUserEdit.last_name);
      setBirthday(dataUserEdit.birthday);
      setEmail(dataUserEdit.email);
      setGender(dataUserEdit.gender);
      setPhone(dataUserEdit.phone);
      // setRole(dataUserEdit.role);
    }
  }, [dataUserEdit, show]);

  const handleEditUser = async () => {
    let res = await putUpdateUser(id, { user_name, password, first_name, last_name, birthday, email, gender, phone });
    if (res && res.data) {
      setId('');
      setUsername('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setBirthday('');
      setEmail('');
      setGender(true);
      setPhone('');
      setRole('');
      handleClose(false);
      toast.success('Updated User Successfully');
    }
  };

  return (
    <Modal size="lg" show={show} onHide={handleClose} variant="dark" style={{ color: '#000' }}>
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <Row>
            <Col xs={12} md={6}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={user_name}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  FirstName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={first_name}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  LastName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={last_name}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div className="mb-3">
                <label htmlFor="birthday" className="form-label">
                  Birthday
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="birthday"
                  value={birthday}
                  onChange={(event) => setBirthday(event.target.value)}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <div className="d-flex align-items-center">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="male"
                      name="gender"
                      value={gender}
                      onClick={() => setGender(true)}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="female"
                      name="gender"
                      value={!gender}
                      onClick={() => setGender(false)}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                <option>Choose Role</option>
                <option value="ADMIN">Admin</option>
                <option value="USER">User</option>
                <option value="GUEST">Guest</option>
              </Form.Select>
            </Col>
          </Row>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleEditUser()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditUser;
