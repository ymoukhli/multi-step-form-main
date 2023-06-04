import { useContext } from "react"
import { appContext } from "../App"
import style from "../styles/inputField.module.css"


/* options used for validation */

export const InputField = ({name, options, label}) => {

    const {register,formState: {errors}} = useContext(appContext)?.useform;

    return (<div className={style.container}>
        <label htmlFor={name} className={style.label}>{label || name}</label>
        {errors[name] && <div className={style.defaultError}>{errors[name].message}</div>}
        <input className={style.inputField} {...register(name , options)}></input>
    </div>)
}