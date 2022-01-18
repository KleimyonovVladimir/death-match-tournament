import { IProps } from './types'

import './style.scss'

const Button = ({ text, isCancel, ...other }: IProps) => {
  return (
    <button {...other} className={isCancel ? 'button outlined close' : 'button button_primary'}>
      {text}
    </button>
  )
}

export default Button
