import React from 'react'
import { contacts } from '../../data/contact'

const Contact = () => {
    return (
        <div className='contact'>
            {contacts.map((contact, id) => (
                <a href={contact.url}>
                    {contact.value}
                </a>
            ))}
        </div>
    )
}

export default Contact