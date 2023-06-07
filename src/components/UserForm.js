import style from '../styles/useform.module.css'
import { InputField } from './InputField';

export const UserForm = () => {

    return (<div className={style.main}>

        <InputField
            name="name"
            label="Name"
            options={{
                required: "name is required",
                maxLength: {
                    value: 40,
                    message: "name should not exceed 40 characters"
                },
                pattern: {
                    value: /^[A-Za-z][A-Za-z0-9_ ]/,
                    message: "should only containe letter and spaces"
                }
            }}
        />

        <InputField
            name="email"
            label="Email Address"
            options={{
                required: "email is required",
                maxLength: {
                    value: 40,
                    message: "email should not exceed 40 characters"
                },
                pattern: {
                    value : /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "please entre a valid email ex: email@test.com"
                }
            }}
        />


        <InputField
            name="phoneNumber"
            label="Phone Number"
            options={{
                pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "phone number is invalid"
                }
            }}
        />
    </div>)
}