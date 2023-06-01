import { createContext, useState } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { SideBar } from './components/SideBar';
import { Title } from './components/Title';
import { PlanPicker, cards } from './components/PlanPicker';
import { AddOns, addonsData } from './components/AddOns';
import { Nav } from './components/Nav';
import { mapCardsToState,mapAddonsToState } from './util'
import style from './styles/app.module.css'
import { Summary } from './components/Summary';
export const appContext = createContext();
function App() {  
  const [currentStep, setCurrentStep] = useState(2);
  const addons = useState(mapAddonsToState(addonsData));
  const isYearly = useState(false);
  const plan = useState(mapCardsToState(cards))
  const {title, description, component} = steps[currentStep];
  return (
    <appContext.Provider value={{isYearly, plan, addons}}>
      <SideBar step={currentStep}/>
      <div className={style.container}>
        <div className={style.contentContainer}>

        <Title title={title} description={description}/>
        <form className={style.form}>
          {component}
        </form>
        </div>
      </div>
      <Nav step={currentStep} setStep={setCurrentStep}/>
    </appContext.Provider>
  );
}

export default App;

const steps = [
    {
      title: "Personal info",
      description: "Please provide your name, email address, and phone number",
      component: <UserForm/>
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing",
      component: <PlanPicker/>
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhace your gaming experience",
      component: <AddOns/>
    },
    {
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming",
      component: <Summary/>
    },
  ]
