const Abilities = ({ abilities }) => {
  return(
    <div className="abilities-section">
      <h4>Abilities</h4>
      <p>{abilities.ability || "Web design"}</p>
    </div>
  )
}

export default Abilities