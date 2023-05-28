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
    return (<>
        <form>
            <input type="checkbox" name="onlineService"/>
            <label htmlFor="onlineService">Online service</label>
            <input type="checkbox" name="largerStorage"/>
            <label htmlFor="largerStorage">Larger storage</label>
            <input type="checkbox" name="customizableProfile"/>
            <label htmlFor="customizableProfile">Customizable profile</label>
        </form>
    </>)
}