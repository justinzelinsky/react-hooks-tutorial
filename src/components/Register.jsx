import './Register.scss';

import React, { useState } from 'react';

import { Button, Form } from 'react-bootstrap';

/*
class Register extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  }

  handleRegister = e => {
    e.preventDefault();
    const { email, password } = this.state;
    alert(`Registering ${email} with password '${password}'`);
  };

  render() {
    return (
       <div styleName="register-container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.handleChangeEmail}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handleChangePassword}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.handleRegister}>
            Register
          </Button>
        </Form>
      </div>
    )
  }
}
*/

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);
  const handleRegister = e => {
    e.preventDefault();
    alert(`Registering ${email} with password '${password}'`);
  };

  return (
    <div styleName="register-container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChangeEmail}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChangePassword}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleRegister}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
