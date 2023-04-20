import "../App.css"

const Header = ({ header }) => {

  return (
    <div className="header-section">
      <h2 className="header-name">{header.name || "name"}</h2>
      <h3 className="header-title">{header.title || "title"}</h3>
    </div>
  )
}

export default Header