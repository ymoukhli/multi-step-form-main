import { useForm } from 'react-hook-form'
import style from '../styles/useform.module.css'


export const UserForm = () => {

    const {register, formState: {errors}} = useForm({
    });
    return (<>
        <label className={style.label}>Name
            <input name='name' {...register("name", {required: true})}/>
        </label>

        <label className={style.label}>Email Address
            <input
                {...register("email", {
                    required: "email is required"
            })}/>
            {errors.email && <span role="alert">This field is required</span>}
        </label>

        <label className={style.label}>Phone Number
            <input {...register("phoneNumber")}/>
        </label>
        <button type='submit'>submit</button>
    </>)
}