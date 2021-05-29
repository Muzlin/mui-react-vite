import React, { SVGAttributes } from 'react'
import classnames from '../helpers/classnames'
import './index.scss'

type TIconProps = {
  name: string
} & SVGAttributes<SVGSVGElement>

const Icon: React.FC<TIconProps> = ({ name, className, ...rest }) => {
  return (
    <svg className={classnames('icon', className)} {...rest}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}
export default Icon
