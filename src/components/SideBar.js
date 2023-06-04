import style from '../styles/sideBar.module.css';

export const SideBar = ({step}) => {

    return (<div className={style.container}>
            <div className={style.backgroundimg}></div>
            <div className={style.contentContainer}>

            {titles.map((elemt, index) => (<div className={style.dataContainer} key={index}>
                <div className={step === index ? style.selected:style.cercle}>{index}</div>
                <div className={style.stepDetail}>
                    <div className={style.stepIndex}>Step {index}</div>
                    <div className={style.description}>{elemt}</div>
                </div>
                </div>))}
            </div>
        </div>)
}

const titles = [
    'YOUR INFO',
    'SELECT PLAN',
    'ADD-ONS',
    'SUMMARY'
]