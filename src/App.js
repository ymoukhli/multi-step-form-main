import { useState } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
import { SideBar } from './components/SideBar';
import { Title } from './components/Title';
import { PlanPicker } from './components/PlanPicker';
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
      component: <UserForm/>
    },
    {
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming",
      component: <UserForm/>
    },
  ]
function App() {  
  const [currentStep, setCurrentStep] = useState(0);
  const {title, description, component} = steps[currentStep];
  return (
    <>
      <SideBar />
      <Title title={title} description={description}/>
      {component}
    </>
  );
}

export default App;
