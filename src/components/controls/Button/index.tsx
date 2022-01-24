import { IProps } from './types'

import './style.scss'

const Button = ({ text, isCancel, ...other }: IProps) => {
  return (
    <button
      {...other}
      className={isCancel ? 'button button_outlined button_offset_left' : 'button button_primary'}
    >
      {text}
    </button>
  )
}

export default Button
