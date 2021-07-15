import React, { Fragment, useEffect, useState } from 'react'
import { scopedClassMaker } from '../helpers/classnames'
import Icon from '../Icon'
import Button from '../Button'
import './index.scss'
import ReactDOM from 'react-dom'

interface IDialogProps {
  title: string
  visible: boolean
  onCancel: React.MouseEventHandler
}

const scopedClass = scopedClassMaker('mui-dialog')
const sc = scopedClass

const Dialog: React.FC<IDialogProps> = (props) => {
  const el =
    (props.visible && (
      <Fragment>
        <div className={sc('mask')} onClick={props.onCancel}></div>
        <div className={sc()}>
          <header className={sc('header')}>
            <span>{props.title}</span>
            <div className={sc('close')} onClick={props.onCancel}>
              <Icon name="close" />
            </div>
          </header>
          <main className={sc('main')}>{props.children}</main>
          <footer className={sc('footer')}>
            <Button>1</Button>
            <Button>2</Button>
          </footer>
        </div>
      </Fragment>
    )) ||
    null
  return ReactDOM.createPortal(el, document.body)
}

const alert = ({ title, content }: { title: string; content: string }) => {
  const div = document.createElement('div')
  const component = (
    <Dialog
      title={title}
      visible
      onCancel={() => {
        // ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
      }}
    >
      {content}
    </Dialog>
  )
  ReactDOM.render(component, div)
}

export default Dialog
export { alert }
