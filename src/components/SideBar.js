import style from '../styles/sideBar.module.css';

export const SideBar = ({step}) => {

    return (<div className={style.container}>
            <div className={style.backgroundimg}></div>
            {titles.map((elemt, index) => (<div key={index}>
                <div className={step === index ? style.selected:style.cercle}>{index}</div>
                <div className={style.stepDetail}>
                    <div>Step {index}</div>
                    <div>{elemt}</div>
                </div>
                </div>))}
        </div>)
}

const titles = [
    'YOUR INFO',
    'SELECT PLAN',
    'ADD-ONS',
    'SUMMARY'
]