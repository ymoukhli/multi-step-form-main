
export const SideBar = () => {

    return (<div>
            {titles.map((elemt, index) => (<div key={index}>
                <div>{index}</div>
                <div>
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