import { IProps } from 'components/controls/Input/type'

const Input = ({ className, label, isTextarea, htmlFor, id, ...other }: IProps) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor || id} className="input-name">
        {label}
      </label>
      {isTextarea ? <textarea {...other} /> : <input {...other} />}
    </div>
  )
}
export default Input
