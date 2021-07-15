import React from 'react'
import { scopedClassMaker } from '../helpers/classnames'
import './index.scss'

const sc = scopedClassMaker('mui-button')

const Button: React.FC = (props) => {
  return <button className={sc()}>{props.children}</button>
}

export default Button
