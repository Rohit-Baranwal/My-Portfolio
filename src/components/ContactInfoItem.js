import { Phone } from '@material-ui/icons';
import React from 'react';
import "../styles/ContactInfoItem.css"

const ContactInfoItem = ({ icon = <Phone />, text ="This is default"}) => {
  return (
    <div className='bodyInfo'>
        <div className='icon'>
            { icon }
        </div>
        <div className='info'>
            <span>{text}</span>
        </div>
    </div>
  )
}

export default ContactInfoItem;