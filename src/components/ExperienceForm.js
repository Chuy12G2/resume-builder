const ExperienceForm = ({ experienceArray, experienceObject, setExperience }) => {
  
  const handleDelete = () => {
    setExperience(experienceArray.filter(e => experienceObject.id !== e.id))
  }

  return (
    <div>
      <input
        className="input"
        placeholder="position"
        value={experienceObject.position}
        onChange={({ target }) => {setExperience(experienceArray.map(e => e.id === experienceObject.id ? {...experienceObject, position: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="company"
        value={experienceObject.company}
        onChange={({ target }) => {setExperience(experienceArray.map(e => e.id === experienceObject.id ? {...experienceObject, company: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="start"
        value={experienceObject.start}
        onChange={({ target }) => {setExperience(experienceArray.map(e => e.id === experienceObject.id ? {...experienceObject, start: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="end"
        value={experienceObject.end}
        onChange={({ target }) => {setExperience(experienceArray.map(e => e.id === experienceObject.id ? {...experienceObject, end: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="place"
        value={experienceObject.place}
        onChange={({ target }) => {setExperience(experienceArray.map(e => e.id === experienceObject.id ? {...experienceObject, place: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="description"
        value={experienceObject.description}
        onChange={({ target }) => {setExperience(experienceArray.map(e => e.id === experienceObject.id ? {...experienceObject, description: target.value} : e))}}
      >
      </input>
      <button
        className="delete-btn" 
        onClick={() => {handleDelete()}}>Delete
      </button>
    </div>
  )
}

export default ExperienceForm