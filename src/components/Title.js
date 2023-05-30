import style from '../styles/title.module.css'
export const Title = ({title,description}) => {
    return (<>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
    </>)
}