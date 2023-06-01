export const Price = ({style, price, isYearly, plus = ""}) => {
    return <p className={style}>{plus}${price}/{isYearly?'yr':'mo'}</p>
}