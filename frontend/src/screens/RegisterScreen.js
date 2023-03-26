import React, { useEffect, useState }  from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import FormContainer from '../components/FormContainer';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../actions/userLoginActions';
import {useParams, useLocation, useNavigate, Link} from 'react-router-dom'
import Notification from '../components/Notification';
import Loader from '../components/Loader';


function CreateListing() {
  let navigate = useNavigate();
  let location = useLocation();

  //redux
  //if user already logged in, they cannot register again
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const userRegister = useSelector(state => state.userLogin);
  let { loading, userInfo, error } = userRegister;
  useEffect(() => {
    error = null;
    if (userInfo) {
        navigate(redirect)
    }
  }, [userInfo, redirect])

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
      // this prevents the default action from occurring, 
      // e.g. prevent "submit" button to test some validation or processing of form data first. 
      e.preventDefault();
      if (password != confirmPassword){
        setMessage("Passwords do not match")
      } else {
        dispatch(register(name, username, email, password));
      }

  }
  return (
    <FormContainer>
      <h4>Register New User</h4>
      {/* if there is an error, display the error message */}
      {message && <Notification variant='danger' message={message}/>}
      {error && <Notification variant='danger' message={error}/>}
      {/* if loading, display the loading message */}
      {loading && <Loader/>}
      <hr / >
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter Name'
              value = {name}
              onChange = {(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter Username'
              value = {username}
              onChange = {(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type='email'
              placeholder='Enter Email'
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId = 'passwordId' placeholder>
            <Form.Label>
                Password
            </Form.Label>
            <Form.Control
                required
                type='password'
                placeholder='Enter Password'
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId = 'confirmPasswordId' placeholder>
            <Form.Label>
                Confirm Password
            </Form.Label>
            <Form.Control
                required
                type='password'
                placeholder='Confirm Password'
                value = {confirmPassword}
                onChange = {(e) => setConfirmPassword(e.target.value)}
            >
            </Form.Control>
          </Form.Group>
          
          <Button type='submit' variant="secondary" className="mb-3">Register</Button>
          <Row>
                <Col>
                    Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</Link>
                </Col>
            </Row>
      </Form>

    </FormContainer>

  )
}

export default CreateListing