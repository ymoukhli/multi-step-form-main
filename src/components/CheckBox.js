import style from '../styles/checkbox.module.css'
export const CheckBox = ({label, selected}) => {
    return (
    <div class={style.container}>
    <input type="checkbox" name={label} checked={selected} readOnly/>
    <span class={style.checkmark}></span>
  </div>)
}