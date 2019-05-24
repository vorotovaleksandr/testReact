import React, { Component } from 'react';
import axios from "axios";


const defaultState = {
  popUpShow:{
    valid: false,
    value: ''
  },
  myMusic:[{
    musicValue:'',
  }]
};


class MyMusic extends Component {
  state = defaultState;
  componentDidMount() {
    const email =  localStorage.getItem('email');
    axios({
      url: 'http://localhost:5000/checkToken',
      method: 'POST',
      data: {
        email
      }
    }).then(req => {
      this.setState({myMusic: {
          musicValue: req.data,
        }});
    }).catch(() => {
      console.log('error');
      this.setState({loading: false, redirect: true});
    })
  }

  render() {
    conditionBuffer.map( ( item: any, index: number ) => {
      return (
        <ul className="homeDnd__secondUl">
          <li>{item.headTask}}</li>
        </ul>
      );
    } )
  }

}

export default MyMusic;
