import React, { Component } from 'react'
import './style.scss'


class MainPageContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      auth: true
    }
  }
  render() {
    return (
    
        <main className="main-wrap has-sidebar">
          <div className="main-content">
          <div className="inner-page-content">
          <h1 class="heading-1"><span>Überblick</span></h1>
            Main content
          </div>
          </div>        
        </main>
      
    )
  }
}

export default MainPageContent;