import "../App.css"

const AboutMeForm = ({ aboutMe, setAboutMe }) => {
  return (
    <div>
      <input
        className="input"
        placeholder="about me"
        value={aboutMe}
        onChange={({ target }) => {setAboutMe(target.value)}}
      >  
      </input>
    </div>
  )
}

export default AboutMeForm