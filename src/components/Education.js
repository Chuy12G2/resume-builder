const Education = ({ education }) => {
  return (
    <div className="education-section">
      <h4>Education</h4>
      <p>{education.degree || "Your degree"}</p>
      <p>{education.school || "University of "}</p>
      <p>{education.start || "2020"} - {education.end || "2024"}</p>
      <p>{education.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio tempor. Montes nascetur ridiculus mus mauris vitae ultricies leo integer."}</p>
    </div>
  )
}

export default Education