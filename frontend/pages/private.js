import React, { Component } from 'react'
import Router from 'next/router'
import PrivateComponent from '../components/PrivateComponent'

export default class Private extends Component {
  render () {
    return (
      <>
        <PrivateComponent />
      </>
    )
  }
}
