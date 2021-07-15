import React, { useState } from 'react'
import Dialog, { alert } from '.'

export default function DialogExample() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Dialog
        visible={visible}
        title="Basic Modal"
        onCancel={() => setVisible(false)}
      >
        <span>1</span>
      </Dialog>
      <button onClick={() => setVisible(true)}>dialog</button>
      <button
        onClick={() => alert({ title: 'alert', content: '2321ndasjkdh' })}
      >
        alert
      </button>
    </>
  )
}
