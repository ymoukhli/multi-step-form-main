import { useContext, useEffect, useState } from "react"
import { Card } from "./Card";
import style from "../styles/planPicker.module.css"
import { appContext } from "../App";
import { resetSelection } from "../util";

export const PlanPicker = () => {
    const [isYearly, setYearly] = useContext(appContext).isYearly
    const [plan, setPlan] = useContext(appContext).plan;
    useEffect(() => {

    }, [])
    const cardsjsx = cards.map(({
            image,
            title,
            monthlyPrice,
            yearlyPrice
        }, index) => (<Card
            onClick={() => setPlan(state => resetSelection(state, index))}
            key={index}
            selected={plan[index].selected}
            index={index}
            src={image}
            title={title}
            price={isYearly ? yearlyPrice:monthlyPrice}
            isYearly={isYearly}/>))

    return (<>
        {cardsjsx}
        <div className={style.container}>
            <div className={!isYearly ? style.selectedtimePlane: style.timePlane}>Monthly</div>
            <button className={!isYearly ? `${style.switch}`:`${style.switch} ${style.toggled}`} type="button" onClick={() => setYearly(state => !state)}>
                <div></div>
            </button>
            <div className={isYearly ? style.selectedtimePlane: style.timePlane}>Yearly</div>
        </div>
    </>)
}

export const cards = [
    {
        image: "images/icon-arcade.svg",
        title: "Arcade",
        monthlyPrice: 9,
        yearlyPrice: 90
    },
    {
        image: "images/icon-advanced.svg",
        title: "Advanced",
        monthlyPrice: 12,
        yearlyPrice: 120
    },
    {
        image: "images/icon-pro.svg",
        title: "Pro",
        monthlyPrice: 15,
        yearlyPrice: 150
    },
]