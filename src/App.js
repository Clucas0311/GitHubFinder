import React, { Component } from 'react'
import NavBar from './components/layout/NavBar'
import './App.css'

class App extends Component {
  render() {
    return (
      // React.Fragment makes invisible divs 
      <React.Fragment className='App'>
        <NavBar title='GitHub Finder' icon='fab fa-github'/>
       
      </React.Fragment>
    )
  }
}

export default App
