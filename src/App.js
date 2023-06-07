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
import { useForm } from 'react-hook-form';
import { FormInfo } from './components/FormInfo';

export const appContext = createContext();

function App() { 

  const useform = useForm();
  const {handleSubmit } = useform;
  const [currentStep, setCurrentStep] = useState(0);
  const addons = useState(mapAddonsToState(addonsData));
  const isYearly = useState(false);
  const plan = useState(mapCardsToState(cards))
  const {title, description, component} = steps[currentStep];
  const [data, setData] = useState(null);

  const onSubmit = (formData) => {
    formData.plan = plan[0].find(e => e.selected === true)?.plan || null;
    formData.addons = addons[0].filter(e => e.selected === true).map(e => (e.addon)) || null;
    formData.paymentPlan = isYearly? "yearly" : "monthly"
    setData(formData);
    console.log(formData);
  };

  return (
    <appContext.Provider value={{isYearly, plan, addons, useform, setData, setCurrentStep}}>
        {data ? <FormInfo data={data}/> : <>
      <div className={style.main}>
        <SideBar step={currentStep}/>
          <div className={style.container}>
            <div className={style.contentContainer}>

            <Title title={title} description={description}/>
            <form id="theform" className={style.form} onSubmit={handleSubmit(onSubmit)}>
              {component}
            </form>
            </div>
          <Nav step={currentStep} setStep={setCurrentStep}/>
          </div>
      </div>
        </>}
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
      description: "Double-check everything looks good",
      component: <Summary/>
    },
  ]
