import { useForm } from 'react-hook-form'
import style from '../styles/useform.module.css'
import { useContext } from 'react';
import { appContext } from '../App';
import { InputField } from './InputField';

export const UserForm = () => {

    const {register, formState: {errors}} = useContext(appContext)?.useform;
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