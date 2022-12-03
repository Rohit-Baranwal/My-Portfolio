import { Email, LocationCityRounded, Phone } from '@material-ui/icons';
import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfoItem from '../components/ContactInfoItem';
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <div className='top'>
        <span>Get in touch</span>
        <span className='title'><b>CONTACT ME!!</b></span>
      </div>
      <div className='middle'>
        <div className='left'>
          <ContactInfoItem icon={<Phone />} text="+91 XXXXX XXXXX" />
          <ContactInfoItem icon={<Email />} text="rohit.baranwal2020@gmail.com" />
          <ContactInfoItem icon={<LocationCityRounded />} text="Mumbai, Maharashtra" />
        </div>
        <div className='right'>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact;