const titles = [
    'YOUR INFO',
    'SELECT PLAN',
    'ADD-ONS',
    'SUMMARY'
]
export const SideBar = () => {

    return (<div>
            {titles.map((elemt, index) => (<div>
                <div>{index}</div>
                <div>
                    <div>Step {index}</div>
                    <div>{elemt}</div>
                </div>
                </div>))}
        </div>)
}