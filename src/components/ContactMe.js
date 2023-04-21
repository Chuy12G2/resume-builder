import { HiPhone, HiLocationMarker, HiGlobeAlt, HiMail } from 'react-icons/hi'

const ContactMe = ({ contact }) => {
  return (
    <div >
      <p className="paragraph"><HiPhone/> {contact.phone || "+52 111 111 1111"}</p>
      <p className="paragraph"><HiLocationMarker/>   {contact.address || "0587 Sanford Junction"}</p>
      <p className="paragraph"><HiGlobeAlt/>  {contact.website || "www.mywebsite.com"}</p>
      <p className="paragraph"><HiMail/> {contact.email || "myemail@mail.com"}</p>
    </div>
  )
}

export default ContactMe;
