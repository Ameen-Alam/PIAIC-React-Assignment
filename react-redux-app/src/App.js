import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { recieveUsers } from './actions/users'

function App(props) {

  useEffect(() => {
    props.dispatch(recieveUsers({ lastName: "Alam" }))
  }, [])
  return (
    <div>
      {props.users.name}      {props.users.lastName}
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users
  }
}


export default connect(mapStateToProps)(App);