import style from '../styles/card.module.css'
import { Price } from './Price'
export const Card = ({
    src,
    title,
    price,
    isYearly,
    onClick,
    selected
}) => {
    const containercss = selected ? style.selectedContainer: style.container;
    return (<div className={containercss} onClick={() => onClick()}>
        <img className={style.image} src={src} alt=''/>
        <div>
            <h3 className={style.h3}>{title}</h3>
            <Price
                style={style.price}
                price={price}
                isYearly={isYearly}
            />
            {isYearly && <p className={style.priceInfo}>2 months free</p>}
        </div>
    </div>)
}