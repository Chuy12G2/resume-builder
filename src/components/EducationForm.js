const EducationForm = ({ educationArray, educationObject, setEducation }) => {
  
  const handleDelete = () => {
    setEducation(educationArray.filter(e => educationObject.id !== e.id))
  }

  return (
    <div>
      <input
        className="input"
        placeholder="degree"
        value={educationObject.degree}
        onChange={({ target }) => {setEducation(educationArray.map(e => e.id === educationObject.id ? {...educationObject, degree: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="school"
        value={educationObject.school}
        onChange={({ target }) => {setEducation(educationArray.map(e => e.id === educationObject.id ? {...educationObject, school: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="start"
        value={educationObject.start}
        onChange={({ target }) => {setEducation(educationArray.map(e => e.id === educationObject.id ? {...educationObject, start: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="end"
        value={educationObject.end}
        onChange={({ target }) => {setEducation(educationArray.map(e => e.id === educationObject.id ? {...educationObject, end: target.value} : e))}}
      >
      </input>
      <input
        className="input"
        placeholder="description"
        value={educationObject.description}
        onChange={({ target }) => {setEducation(educationArray.map(e => e.id === educationObject.id ? {...educationObject, description: target.value} : e))}}
      >
      </input>
      <button
        className="delete-btn" 
        onClick={() => {handleDelete()}}>Delete
      </button>
    </div>
  )
}

export default EducationForm