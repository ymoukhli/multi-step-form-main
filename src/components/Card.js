export const Card = ({src, title, price, isYearly}) => {
    return (<>
        <img src={src}/>
        <h3>{title}</h3>
        <p>{price}</p>
        {isYearly} && <p>2 months free</p>
    </>)
}