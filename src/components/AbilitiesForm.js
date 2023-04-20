const AbilitiesForm = ({ abilityObject, abilitiesArray, setAbilities }) => {

  const handleDelete = () => {
    setAbilities(abilitiesArray.filter(e => abilityObject.id !== e.id))
  }

  return(
    <div>
      <input
        className="input"
        placeholder="ability"
        value={abilityObject.ability}
        onChange={({ target }) => {setAbilities(abilitiesArray.map(e => e.id === abilityObject.id ? {...abilityObject, ability: target.value} : e))}}
      ></input>
      <button 
        className="delete-btn"
        onClick={() => {handleDelete()}}>Delete
        </button>
    </div>
  )
}

export default AbilitiesForm