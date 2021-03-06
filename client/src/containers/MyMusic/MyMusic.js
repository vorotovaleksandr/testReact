import React, { Component } from 'react';
import axios from "axios";
import classes from "../Music/Music.css";
import { ListGroup } from "react-bootstrap";

const defaultState = {
  popUpShow: {
    valid: false,
    value: ''
  },
  myMusic: [{
    musicValue: '',
    email: ''
  }]
};

class MyMusic extends Component {
  state = defaultState;
  buffer = this.state.myMusic;

  componentDidMount() {
    const email = localStorage.getItem( 'email' );
    axios( {
      url: 'http://localhost:5000/music/getall',
      method: 'POST',
      data: {
        email
      }
    } ).then( req => {
      console.log( '-----req.data', req.data );
      req.data.forEach(
        ( item ) => {
          this.buffer.push(
            {
              musicValue: item.value,
              email: item.email,
            },
          );
        } );
      this.setState( {myMusic: this.buffer}
      );
    } ).catch( () => {
      console.log( 'error' );
      this.setState( {loading: false, redirect: true} );
    } )
  }

  render() {
    const row = this.buffer;
    return (
      <div className={classes.QuizList}>
        <div>
          <h1> My Music List </h1>
          {console.log( '-----tc', row )}
          {row.map( ( item, index ) => {
            return (
              <ListGroup as="ul" className="homeDnd__secondUl">
                <ListGroup.Item
                  as="li"
                  key={index}
                >
                  {item.musicValue}
                  <i
                    className="fa fa-heart"
                    aria-hidden="true"
                  />
                </ListGroup.Item>
              </ListGroup>
            );
          } )}
        </div>
      </div>
    )
  }
}

export default MyMusic;
