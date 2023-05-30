import style from '../styles/useform.module.css'
export const UserForm = () => {
    return (<>
        <label className={style.label}>Name
            <input></input>
        </label>

        <label className={style.label}>Email Address
            <input></input>
        </label>

        <label className={style.label}>Phone Number
            <input></input>
        </label>
    </>)
}