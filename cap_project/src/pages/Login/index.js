import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '~/assets/images/unity.png';
import './style.scss';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(username, ' ', password);
    if (username === 'user' && password === '123') {
      toast.success('Login successful');
      navigate('/');
    } else {
      toast.error('Login failed');
    }
  };

  return (
    <>
      <section className="background-radial-gradient overflow-hidden vh-100">
        <Container fluid className="d-flex flex-column justify-content-center align-items-center h-100">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <img src={logo} alt="" style={{ maxHeight: '90px' }} className="me-3 " />
          </div>
          <form className="login col-xl-4 col-lg-6 col-md-8 col-sm-9 col-11 p-4 rounded shadow">
            <h3 className="mb-4">Sign into your account</h3>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Username
              </label>
              <input type="email" className="form-control" id="email" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <NavLink className="text-decoration-none" to="/forgot_password">
                  Forgot password?
                </NavLink>
              </div>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <p>
                Don't have an account?{' '}
                <NavLink className="" to="/register">
                  Sign Up
                </NavLink>
              </p>
            </div>
            <div className="d-grid col-12 col-sm-8 col-lg-7 col-xl-8 mx-auto mb-5">
              <p className="btn fw-bold" onClick={() => handleSubmit()}>
                Login
              </p>
            </div>
            <div>
              <NavLink className="text-decoration-none small" to="/term_of_use" style={{ color: 'var(--text)' }}>
                Terms of use.
              </NavLink>{' '}
              <NavLink className="text-decoration-none small" to="/privacy_policy" style={{ color: 'var(--text)' }}>
                Privacy policy
              </NavLink>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}

export default Login;
