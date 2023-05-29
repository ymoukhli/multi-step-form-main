const addons = [
    {
    title: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: "1",
    yearlyPrice: "8"
    },
    {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: "2",
    yearlyPrice: "19"
    },
    {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: "2",
    yearlyPrice: "19"
    },
]
export const AddOns = ({isYearly}) => {
    const addonsJsx = addons.map((e, i)=> (
    <div key={i}>
        <input type="checkbox" name={e.title}/>
        <div>
            <label htmlFor={e.title}>{e.title}</label>
            <p>{e.description}</p>
        </div>
        <div></div>
    </div>));
    return (<>
        {addonsJsx}
    </>)
}