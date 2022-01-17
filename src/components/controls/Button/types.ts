export interface IProps {
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  isCancel?: boolean
}
