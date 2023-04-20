import "../App.css"

const HeaderForm = ({header, setHeader}) => {
  return (
    <div>
      <form>
        <input 
          className="input"
          placeholder="name" 
          value={header.name}
          onChange={(e) => {setHeader({title: header.title, name: e.target.value})}}
          > 
        </input>
        <input 
          className="input"
          placeholder="title"
          value={header.title}
          onChange={(e) => setHeader({name: header.name, title: e.target.value})}
        >
        </input>
      </form>
    </div>
  )
}

export default HeaderForm