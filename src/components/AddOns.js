import { useContext } from "react";
import style from "../styles/addons.module.css"
import { appContext } from "../App";
import { toggleSelection } from "../util";
import { CheckBox } from "./CheckBox";
import { Price } from "./Price";
export const AddOns = () => {
    const [isYearly] = useContext(appContext).isYearly;
    const [addons, setAddons] = useContext(appContext).addons;

    const addonsJsx = addonsData.map((e, i)=> {
        const selected = addons[i].selected;
        const containerCss = selected ? style.selectedContainer: style.container;
        const priceCss = selected ? style.selectedPrice: style.price;
        return (
        <div 
            onClick={() => setAddons(state => toggleSelection(state, i))}
            className={containerCss}
            key={i}
        >
            <CheckBox lable={e.title} selected={selected}/>
            <div className={style.descriptionContainer}>
                <label className={style.label} htmlFor={e.title}>{e.title}</label>
                <p className={style.description}>{e.description}</p>
            </div>
                <Price
                    isYearly={isYearly}
                    style={priceCss}
                    price={(isYearly ? e.yearlyPrice: e.monthlyPrice)}
                    plus="+"
                />
        </div>)
        });
    return (<>
        {addonsJsx}
    </>)
}

export const addonsData = [
    {
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: "1",
    yearlyPrice: "8"
    },
    {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: "2",
    yearlyPrice: "19"
    },
    {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: "2",
    yearlyPrice: "19"
    },
]