import React, { Component } from 'react';
import classes from './Registrate.css';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import cx from 'classnames';
import { NavLink, Redirect } from 'react-router-dom';

const defaultState = {
  popUpShow: {
    valid: false,
    value: ''
  },
  form: {
    name: {
      isValid: true,
      value: '',
    },
    email: {
      isValid: true,
      value: '',
    },
    password: {
      isValid: true,
      value: '',
    },
  },
};

class Registrate extends Component {
  state = defaultState;

  registerHandler = () => {
    const authData = {
      name: this.state.form.name.value,
      email: this.state.form.email.value,
      password: this.state.form.password.value
    };
    axios( {
      url: 'http://localhost:5000/auth/register',
      method: 'POST',
      data: authData
    } ).then( response => {
      return <Redirect to="/login"/>;
    } ).catch( res => {
      this.setState( {
        popUpShow: {
          valid: true,
          value: res
        }
      } );
    } )
  };
  onChangeInput = ( event, field ) => {
    this.setState( {
      form: {
        ...this.state.form,
        [field]: {
          value: event.target.value,
          isValid: true,
        },
      },
    } );
    console.log( '-----this.state', this.state );
  };

  render() {
    const popUp = this.state.popUpShow;
    return (
      <div className={classes.registrate} onClick={this.popupClose}>
        <h3>Registrate</h3>
        <div className={classes.registrate__form}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Small text"
            onChange={event => this.onChangeInput( event, 'name' )}
          />
          <br/>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={event => this.onChangeInput( event, 'email' )}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={event => this.onChangeInput( event, 'password' )}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => this.registerHandler()}
          >
            Registration
          </Button>
          <Button
            variant="primary"
            type="submit"
          >
            <NavLink
              to="Login"
            >
              Login
            </NavLink>
          </Button>
        </div>
        <div className={cx( classes.showPopUp, !popUp.valid ? classes.showPopUpTrue : classes.showPopUpFalse )}>
          <p>{popUp.value}</p>
          <i className="fa fa-angle-down" aria-hidden="true" onClick={this.popupClose}/></div>
      </div>
    )
  }
}

export default Registrate;

