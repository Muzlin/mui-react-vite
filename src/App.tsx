import React, { useState } from 'react'
import Button from './lib/button'
import Icon from './lib/Icon'

function App() {
  return (
    <div className="App">
      <Icon name="wechat" onClick={() => console.log()} />
    </div>
  )
}

export default App
