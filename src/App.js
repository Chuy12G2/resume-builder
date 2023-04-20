import { useState } from 'react';
import uniqid from 'uniqid'
import './App.css';
import Header from './components/Header';
import HeaderForm from './components/HeaderForm';
import AboutMeForm from './components/AboutMeForm';
import AboutMe from './components/AboutMe';
import ContactMeForm from './components/ContactMeForm';
import ContactMe from './components/ContactMe';
import EducationForm from './components/EducationForm';
import Education from './components/Education';
import AbilitiesForm from './components/AbilitiesForm';
import Abilities from './components/Abilities';
import ExperienceForm from './components/ExperienceForm';
import Experience from './components/Experience';

function App() {
  
  const [header, setHeader] = useState({name: "", title: ""})
  const [aboutMe, setAboutMe] = useState("")
  const [contact, setContact] = useState({phone: "", address: "", website: "", email: "" })
  const [education, setEducation] = useState([{degree: "", school: "", start: "", end: "", description: "", id: uniqid()}])
  const [abilities, setAbilities] = useState([{ability: "", id: uniqid()}])
  const [experience, setExperience] = useState([{position: "", company: "", start: "", end: "",place: "", description: "", id: uniqid()}])

  const newEducationObject = {degree: "", school: "", start: "", end: "", description: "", id: uniqid()}
  const newAbilityObject = {ability: "", id: uniqid()}
  const newExperinceObject = {position: "", company: "", start: "", end: "",place: "", description: "", id: uniqid()}

  return (
    <div className="App">
      <div className='main-form'>
        <h2 className='main-form--section-title'>Personal Information</h2>
        <HeaderForm header={header} setHeader={setHeader}/>
        <AboutMeForm aboutMe={aboutMe} setAboutMe={setAboutMe}/>
        <ContactMeForm contact={contact} setContact={setContact}/>

        <h2 className='main-form--section-title'>Abilities</h2>
        {abilities.map(e => <AbilitiesForm
          key={e.id}
          abilityObject={e}
          abilitiesArray={abilities}
          setAbilities={setAbilities}
        />)}
        <button
          className='add-btn' 
          onClick={() => {setAbilities(abilities.concat(newAbilityObject))}}>Add
        </button>
   
        <h2 className='main-form--section-title'>Education</h2>
        {education.map(e => <EducationForm 
          key={e.id} 
          educationObject={e} 
          educationArray={education} 
          setEducation={setEducation}
        />)}
        <button
          className='add-btn' 
          onClick={() => {setEducation(education.concat(newEducationObject))}}>Add
        </button>
      
        <h2 className='main-form--section-title'>Work Experience</h2>
        {experience.map(e => <ExperienceForm
          key={e.id}
          experienceObject={e}
          experienceArray={experience}
          setExperience={setExperience}
        />)}
        <button
          className='add-btn' 
          onClick={() => {setExperience(experience.concat(newExperinceObject))}}>Add
        </button>
      </div>


      <div className='cv-preview'>
        <div className='top-bar'></div>
        <Header header={header} />
        <hr className='divider'></hr>
        <AboutMe
          aboutMe={aboutMe}/>
        <hr className='divider'></hr>
        <ContactMe contact={contact}/>
        <hr className='divider'></hr>
        {education.map(e => <Education key={e.id} education={e}/>)}
        <hr className='divider'></hr>
        {abilities.map(e => <Abilities key={e.id} abilities={e}/>)}
        {experience.map(e => <Experience key={e.id} experience={e}/>)}
      </div>
    </div>
  )
}

export default App;
