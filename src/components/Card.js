import style from '../styles/card.module.css'
export const Card = ({src, title, price, isYearly,onClick}) => {
    return (<div className={style.container} onClick={onClick()}>
        <img className={style.image} src={src} alt=''/>
        <div>

        <h3 className={style.h3}>{title}</h3>
        <p className={style.price}>${price}/{isYearly?'yr':'mo'}</p>
        {isYearly && <p className={style.priceInfo}>2 months free</p>}
        </div>
    </div>)
}