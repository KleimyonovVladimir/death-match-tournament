import { IProps } from 'components/controls/Input/type'

const Input = ({ className, label, isTextarea, id, ...other }: IProps) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="input-name">
        {label}
      </label>
      {isTextarea ? <textarea id={id} {...other} /> : <input id={id} {...other} />}
    </div>
  )
}
export default Input
