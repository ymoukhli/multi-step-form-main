import { useContext } from 'react';
import style from '../styles/nav.module.css'
import { appContext } from '../App';
export const Nav = ({step, setStep}) => {
    const context = useContext(appContext);
    const {trigger} = context.useform;
    const [plan] = context.plan;
    const canSubmit = step >= 3;
    const canGoBack = step > 0;
    const validate = async () => {
        if (step === 0)
        {
            const result = await trigger()
            if (result) setStep(state => state + 1);
        }
        else if (step === 1)
        {
            if (plan.find(e => e.selected)) setStep(state => state + 1)
        }
        else if (step === 2)
        {
            setStep(state => state + 1)
        }
    }
    return (
    <div className={step === 0 ? style.oneItemContainer: style.container}>
        {canGoBack && <button type='button' className={style.backButton} onClick={() => setStep(step => step - 1)}>Go back</button>}
        {!canSubmit && <button type='button' className={style.nextButton} onClick={() => validate()}>Next Step</button>}
        {canSubmit && <button type='submit' form='theform' className={style.continueButton}>Continue</button>}
    </div>)
}