import { FaSchool, FaRegCalendarTimes } from 'react-icons/fa' 

const Education = ({ education }) => {
  return (
    <div >
      <p className="paragraph">{education.degree || "Your degree"}</p>
      <p className="paragraph"><FaSchool/> {education.school || "University of "}</p>
      <p className="paragraph"><FaRegCalendarTimes/> {education.start || "2020"} - {education.end || "2024"}</p>
      <p className="paragraph">{education.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio tempor. Montes nascetur ridiculus mus mauris vitae ultricies leo integer."}</p>
    </div>
  )
}

export default Education