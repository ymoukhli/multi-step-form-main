import { createContext, useState } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { SideBar } from './components/SideBar';
import { Title } from './components/Title';
import { PlanPicker } from './components/PlanPicker';
import { AddOns } from './components/AddOns';
import { Nav } from './components/Nav';
import style from './styles/app.module.css'
export const yearContext = createContext();
function App() {  
  const [currentStep, setCurrentStep] = useState(2);
  const isYearly = useState(false);

  const {title, description, component} = steps[currentStep];
  return (
    <yearContext.Provider value={isYearly}>
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
    </yearContext.Provider>
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
      component: <UserForm/>
    },
  ]