import { useState } from "react"
import { Card } from "./Card";


export const PlanPicker = () => {
    const [isYearly, setYearly] = useState(false);
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
        <div>
            <div>Monthly</div>
            <button onClick={() => setYearly(state => !state)}></button>
            <div>Yearly</div>
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