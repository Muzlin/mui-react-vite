import React, { Fragment } from 'react'
import { scopedClassMaker } from '../helpers/classnames'
import Icon from '../Icon'
import './index.scss'

interface IDialogProps {
  visible: boolean
}

const scopedClass = scopedClassMaker('mui-dialog')
const sc = scopedClass

const Dialog: React.FC<IDialogProps> = (props) => {
  return (
    (props.visible && (
      <Fragment>
        <div className={sc('mask')}></div>
        <div className={sc()}>
          <div className={sc('close')}>
            <Icon name="close" />
          </div>
          <header className={sc('header')}>提示</header>
          <main className={sc('main')}>{props.children}</main>
          <footer className={sc('footer')}>
            <button>1</button>
            <button>2</button>
          </footer>
        </div>
      </Fragment>
    )) ||
    null
  )
}
export default Dialog
