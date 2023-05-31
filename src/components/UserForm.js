import style from '../styles/useform.module.css'
export const UserForm = () => {
    return (<>
        <label className={style.label}>Name
            <input/>
        </label>

        <label className={style.label}>Email Address
            <input/>
        </label>

        <label className={style.label}>Phone Number
            <input/>
        </label>
    </>)
}