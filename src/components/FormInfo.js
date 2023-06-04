import { useContext } from "react";
import style from "../styles/formInfo.module.css"
import { appContext } from "../App";
import { mapAddonsToState, mapCardsToState } from '../util'
import {cards } from './PlanPicker';
import { addonsData } from "./AddOns";

export const FormInfo = ({data}) => {

    const context = useContext(appContext);
    const [,setAddona] = context.addons;
    const [,setPlan] = context.plan;

    const dataJsx = typeof data === "object" && Object.entries(data).map(([key, value]) => <div className={style.contentContainer}>
            <span className={style.span}>{key}</span>{Array.isArray(value) ?
                                <ul className={style.value}>
                                    {value.length > 0 ?value.map(e => <li className={style.second}>{e}</li>):<li className={style.second}>---</li>}
                                </ul>
                                :
                                <span className={`${style.span} ${style.second}`}>{value ? value : '---'}</span>}
        </div>)                
    return (
    <div className={style.formInfo}>
        <div className={style.title}>thank you for submitting</div>
        <div className={style.description}>this is the data that you will submit</div>
        <div className={style.main}>
            <div className={style.container}>
                {dataJsx}
            </div>
        </div>
        <button className={style.resetButton} onClick={() => {
            setPlan(mapCardsToState(cards))
            setAddona(mapAddonsToState(addonsData))
            context.setCurrentStep(0)
            context.setData(null)

        }}>reset</button>
    </div>)
}