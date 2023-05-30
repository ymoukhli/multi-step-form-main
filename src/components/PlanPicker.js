import { useContext, useState } from "react"
import { Card } from "./Card";
import style from "../styles/planPicker.module.css"
import { yearContext } from "../App";

export const PlanPicker = () => {
    const [isYearly, setYearly] = useContext(yearContext)
    const cardsjsx = cards.map(({
        image,
        title,
        monthlyPrice,
        yearlyPrice
    }, index) => (<Card
        key={index}
        src={image}
        title={title}
        price={isYearly ? yearlyPrice:monthlyPrice}
        isYearly={isYearly}/>))

    return (<>
        {cardsjsx}
        <div className={style.container}>
            <div className={isYearly ? style.selected: style.timePlane}>Monthly</div>
            <button onClick={() => setYearly(state => !state)}></button>
            <div className={!isYearly ? style.selectedtimePlane: style.timePlane}>Yearly</div>
        </div>
    </>)
}

const cards = [
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