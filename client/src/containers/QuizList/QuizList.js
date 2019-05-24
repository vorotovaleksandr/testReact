import React, { Component } from 'react';
import classes from './QuizList.css';
import { NavLink } from 'react-router-dom';
import {Button, ButtonToolbar} from 'react-bootstrap'

export default class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li
          key={index}
        >
          <NavLink to={'/quiz/' + quiz}>
            Test {quiz}
          </NavLink>
        </li>
      )
    })
  }
  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1> Quiz List </h1>
          <ButtonToolbar>
            <Button href="#">Link</Button>
            <Button type="submit">Button</Button>
            <Button as="input" type="button" value="Input" />
            <Button as="input" type="submit" value="Submit" />
            <Button as="input" type="reset" value="Reset" />
          </ButtonToolbar>;
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    )
  }
}

