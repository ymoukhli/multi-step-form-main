import style from '../styles/checkbox.module.css'
export const CheckBox = ({label, selected}) => {
    return (
    <div className={style.container}>
    <input type="checkbox" name={label} checked={selected} readOnly/>
    <span className={style.checkmark}></span>
  </div>)
}