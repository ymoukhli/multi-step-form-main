import { useContext } from "react";
import style from "../styles/addons.module.css"
import { appContext } from "../App";
import { toggleSelection } from "../util";
export const AddOns = () => {
    const [isYearly] = useContext(appContext).isYearly;
    const [addons, setAddons] = useContext(appContext).addons;

    const addonsJsx = addonsData.map((e, i)=> {
        const selected = addons[i].selected;
        const containerCss = selected ? style.selectedContainer: style.container;
        const priceCss = selected ? style.selectedPrice: style.price;
        console.log(selected)
        return (
        <div 
            onClick={() => setAddons(state => toggleSelection(state, i))}
            className={containerCss}
            key={i}
        >
            <input  className={style.checkbox}  type="checkbox" value={e.title} name={e.title} checked={selected} readOnly/>
            <div>
                <label className={style.label} htmlFor={e.title}>{e.title}</label>
                <p className={style.description}>{e.description}</p>
            </div>
            <div className={priceCss}>
                +${isYearly ? e.yearlyPrice: e.monthlyPrice}
                /
                {isYearly ? 'yr': 'mo'}
                </div>
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