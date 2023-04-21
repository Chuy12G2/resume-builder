import "../App.css"

const Header = ({ header }) => {

  return (
    <div className="header-section">
      <h2 className="header-name">{header.name || "Your name"}</h2>
      <h3 className="header-title">{header.title || "Your title"}</h3>
      <hr className="header-divider"></hr>
    </div>
  )
}

export default Header