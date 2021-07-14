import React, { useState } from 'react'
import Dialog from '.'

export default function DialogExample() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Dialog visible={visible}>
        <span>1</span>
      </Dialog>
      <button onClick={() => setVisible(true)}>dialog</button>
    </>
  )
}
