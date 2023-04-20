const ContactMe = ({ contact }) => {
  return(
    <div className="contactme-section">
      <h4>Contact Me</h4>
      <p>{contact.phone || "+52 111 111 1111"}</p>
      <p>{contact.address || "0587 Sanford Junction"}</p>
      <p>{contact.website || "www.mywebsite.com"}</p>
      <p>{contact.email || "myemail@mail.com"}</p>
    </div>
  )
}

export default ContactMe