import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div className='wrapper'>
      <div className='box a'>A</div>
      <div className='box b'>B</div>
      <div className='box c'>C</div>
      <div className='box d'>D</div>
      <div className='box e'>E</div>
      <div className='box f'>F</div>

      <div className='wrapper1'>
        <div className='box1 header'>Header</div>
        <div className='box1 sidebar'>SideBar</div>
        <div className='box1 content'>Content
          <img src='http://gridbyexample.com/examples/code/arrow-top-left.png' alt='top left' className='topleft' />
        </div>

      </div>
    </div>
  }
}

export default App
