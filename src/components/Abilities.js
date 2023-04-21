const Abilities = ({ abilities }) => {
  return(
    <div >
      <p className="paragraph">{abilities.ability || "Web design"}</p>
    </div>
  )
}

export default Abilities