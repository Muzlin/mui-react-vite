import React, { useState } from 'react'
import Dialog from './lib/Dialog'
import DialogExample from './lib/Dialog/example'
import Icon from './lib/Icon'
import './lib/index.scss'

function App() {
  return (
    <div className="App">
      <Icon name="wechat" onClick={() => console.log()} />
      <DialogExample />
    </div>
  )
}

export default App
