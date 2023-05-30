import style from '../styles/nav.module.css'
export const Nav = ({step, setStep}) => {
    const canSubmit = step >= 3;
    const canGoBack = step > 0;
    return (
    <div className={step === 0 ? style.oneItemContainer: style.container}>
        {canGoBack && <button className={style.backButton} onClick={() => setStep(step => step - 1)}>Go back</button>}
        {!canSubmit && <button className={style.nextButton} onClick={() => setStep(step => step + 1)}>Next Step</button>}
        {canSubmit && <button className={style.continueButton}>Continue</button>}
    </div>)
}