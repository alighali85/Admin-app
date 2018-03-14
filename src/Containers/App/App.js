import React, { Component } from 'react'
import Store from '../../store/store.js'
import Sidebar from '../../Components/Sidebar/Sidebar.js'
import './style.scss'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: true
    }
  }
  render() {
    return (
      <div className="app">
        <Sidebar />
        <main className="main-wrap has-sidebar">
          <div className="main-content">
            <div className="inner-page-content">
              <h1 class="heading-1"><span>Überblick</span></h1>
              Main content
            </div>
          </div>        
        </main>
      </div>
    )
  }
}

export default App;