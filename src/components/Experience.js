const Experience = ({ experience }) => {
  return (
    <div className="experience-section">
      <h4>Experience</h4>
      <p>{experience.position || "Job Position"}</p>
      <p>{experience.company || "Company Name"}</p>
      <p>{experience.start || "2012"} - {experience.end || "2014"}</p>
      <p>{experience.place || "Country"}</p>
      <p>{experience.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio tempor. Montes nascetur ridiculus mus mauris vitae ultricies leo integer."}</p>
    </div>
  )
}

export default Experience