import "../App.css"

const ContactMeForm = ({ contact, setContact}) => {
  return (
    <div>
      <input
        className="input"
        placeholder="phone"
        value={contact.phone}
        onChange={({ target }) => {setContact({...contact, phone: target.value})}}  
        >
      </input>
      <input
        className="input"
        placeholder="address"
        value={contact.address}
        onChange={({ target }) => {setContact({...contact, address: target.value})}}  
        >
      </input>
      <input
        className="input"
        placeholder="website"
        value={contact.website}
        onChange={({ target }) => {setContact({...contact, website: target.value})}}  
        >
      </input>
      <input
        className="input"
        placeholder="email"
        value={contact.email}
        onChange={({ target }) => {setContact({...contact, email: target.value})}}  
        >
      </input>
    </div>
  )
}

export default ContactMeForm