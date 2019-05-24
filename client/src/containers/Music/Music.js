import React, { Component } from 'react';
import classes from './Music.css';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap'

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

class Music extends Component {
  state = defaultState;
  buffer = this.state.myMusic;

  componentDidMount() {
    axios( {
      url: 'http://localhost:5000/music/getall',
      method: 'POST',
      data: {
        email: 'Start'
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

  musicLike = ( item ) => {
    console.log( '-----item', item.musicValue );
    const email = localStorage.getItem( 'email' );
    axios( {
      url: 'http://localhost:5000/music/update',
      method: 'POST',
      data: {
        email,
        value: item.musicValue
      }
    } ).then( req => {


    } ).catch( () => {
      console.log( 'error' );
      this.setState( {loading: false, redirect: true} );
    } )
  };

  render() {
    const row = this.buffer;
    return (
      <div className={classes.QuizList}>
        <div>
          <h1> Music List </h1>
          {row.map( ( item, index ) => {
            return (
              <ListGroup key={index} as="ul" className="homeDnd__secondUl">
                <ListGroup.Item
                  as="li"
                  key={index}
                >
                  {item.musicValue}
                  <i
                    className="fa fa-heart"
                    aria-hidden="true"
                    onClick={() => this.musicLike( item )}
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

export default Music;
