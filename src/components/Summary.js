import { useContext } from "react"
import { appContext } from "../App"
import style from '../styles/summary.module.css'
import { Price } from "./Price"
import { getTotalPrice } from "../util"

export const Summary = () => {
    const [plan] = useContext(appContext).plan;
    const [isYearly] = useContext(appContext).isYearly;
    const [addons] = useContext(appContext).addons;
    const activePlan = plan.find(e => e.selected === true);
    const activeAddons = addons.filter(e => e.selected);
    const [monthlyTotalPrice, yearlyTotalPrice] = getTotalPrice(activeAddons, activePlan, isYearly)
    const addonsJsx = activeAddons.map(e => (
        <div key={e.addon} className={style.addonContainer}>
            <div className={style.selectedAddon}>{e.addon}</div>
            <Price 
                price={isYearly ? e.yearlyPrice: e.monthlyPrice}
                plus="+"
                style={style.addonPrice}
                isYearly={isYearly}
            />
        </div>
    ));
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.containerHolder}>
                    {activePlan && <div className={style.planContainer}>
                        <div>
                            <div className={style.plan}>{activePlan.plan} {isYearly ? " (Yearly)": " (Monthly)"}</div>
                            <button type="button" className={style.change}>Change</button>
                        </div>
                        <Price
                            style={style.planPrice}
                            plus="+"
                            price={isYearly ? activePlan.yearlyPrice: activePlan.monthlyPrice}
                            />
                    </div>}
                    <div className={style.bar}/>
                    {addonsJsx}
                </div>
            </div>
            <div className={style.totalPriceContainer}>
                <div className={style.priceDescription}>
                    Total (per {isYearly? 'year' : 'month'})
                </div>
                <Price
                    style={style.totalPrice}
                    price={isYearly ? yearlyTotalPrice: monthlyTotalPrice}
                    isYearly={isYearly}
                />
            </div>
        </div>
    )
}