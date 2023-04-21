import { MdWork } from 'react-icons/md'
import { FaRegCalendarTimes } from 'react-icons/fa' 
import { HiGlobeAlt } from 'react-icons/hi'

const Experience = ({ experience }) => {
  return (
    <div >
      <p className="paragraph para-exp">{experience.position || "Job Position"}</p>
      <p className="paragraph para-exp"><MdWork/> {experience.company || "Company Name"}</p>
      <p className="paragraph para-exp"><FaRegCalendarTimes/> {experience.start || "2012"} - {experience.end || "2014"}</p>
      <p className="paragraph para-exp"><HiGlobeAlt/> {experience.place || "Country"}</p>
      <p className="paragraph">{experience.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac odio tempor. Montes nascetur ridiculus mus mauris vitae ultricies leo integer."}</p>
    </div>
  )
}

export default Experience